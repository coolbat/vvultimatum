import { codes, guideBySlug, guides, sources } from "../src/lib/content";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) {
    throw new Error(message);
  }
}

const richGuideSlugs = new Set([
  "beginner-guide",
  "best-race",
  "controls-keybinds",
  "leveling-guide",
  "hollow-progression",
  "quincy-progression",
  "sanrei-glove",
  "shinigami-progression",
  "spirit-charms",
  "spirit-charm-tier-list",
  "clans-tier-list",
  "build-planning",
  "vv-builder-build-planner",
]);

const youtubeIdPattern = /^[A-Za-z0-9_-]{11}$/;

const slugs = new Set<string>();
for (const guide of guides) {
  assert(!slugs.has(guide.slug), `Duplicate guide slug: ${guide.slug}`);
  slugs.add(guide.slug);
  assert(guide.faq.length >= 3, `Guide ${guide.slug} needs at least 3 FAQ entries`);
  assert(guide.steps.length >= 3, `Guide ${guide.slug} needs at least 3 steps`);
  assert(guide.sources.length >= 1, `Guide ${guide.slug} needs sources`);
  for (const sourceKey of guide.sources) {
    assert(sources[sourceKey], `Guide ${guide.slug} references missing source ${sourceKey}`);
  }
  for (const relatedSlug of guide.related) {
    assert(guideBySlug.has(relatedSlug), `Guide ${guide.slug} references missing related guide ${relatedSlug}`);
  }
  if (guide.videos) {
    assert(guide.videos.length > 0, `Guide ${guide.slug} has an empty videos array`);
    for (const video of guide.videos) {
      assert(video.title.length >= 8, `Guide ${guide.slug} has a video with a short title`);
      assert(youtubeIdPattern.test(video.youtubeId), `Guide ${guide.slug} has invalid YouTube ID ${video.youtubeId}`);
      assert(video.url === `https://www.youtube.com/watch?v=${video.youtubeId}`, `Guide ${guide.slug} video URL does not match ID ${video.youtubeId}`);
      assert(video.note.length >= 20, `Guide ${guide.slug} video ${video.youtubeId} needs a useful note`);
    }
  }
  if (guide.sections) {
    assert(guide.sections.length > 0, `Guide ${guide.slug} has an empty sections array`);
    for (const section of guide.sections) {
      assert(section.title.length >= 4, `Guide ${guide.slug} has a section with a short title`);
      assert(section.body.length >= 1, `Guide ${guide.slug} section ${section.title} needs body copy`);
      for (const paragraph of section.body) {
        assert(paragraph.length >= 40, `Guide ${guide.slug} section ${section.title} has a thin paragraph`);
      }
      if (section.bullets) {
        assert(section.bullets.length >= 2, `Guide ${guide.slug} section ${section.title} needs at least 2 bullets`);
      }
    }
  }
  if (richGuideSlugs.has(guide.slug)) {
    assert((guide.videos?.length ?? 0) >= 1, `Rich guide ${guide.slug} needs at least 1 video reference`);
    assert((guide.sections?.length ?? 0) >= 4, `Rich guide ${guide.slug} needs at least 4 detailed sections`);
  }
}

for (const source of Object.values(sources)) {
  assert(source.url.startsWith("https://"), `Source ${source.key} must use https URL`);
  assert(source.checkedAt >= "2026-06-01", `Source ${source.key} checkedAt looks stale`);
}

assert(codes.some((code) => code.status === "active"), "At least one active code is required");
assert(codes.some((code) => code.status === "source_conflict"), "At least one source-conflict code should be tracked while public sources disagree");

console.log(`Content validation passed: ${guides.length} guides, ${Object.keys(sources).length} sources, ${codes.length} codes.`);

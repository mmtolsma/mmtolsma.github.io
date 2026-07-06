<script>
  import Heading from "../../components/Heading.svelte";

  const toolsAndLanguages = [
    "Ruby",
    "Ruby on Rails",
    "JavaScript",
    "React",
    "Bootstrap",
    "CSS",
    "HTML",
  ];

  const coreSkills = [
    "ActiveRecord",
    "REST APIs & webhooks",
    "state machines",
    "service objects / Interactor pattern",
    "data migrations",
    "OpenAI / LLM integration",
    "structured output",
    "reconciliation & audit trails",
  ];

  const secondarySkills = ["Node.js", "Sidekiq", "AWS S3", "Stripe / PayFast"];
</script>

<Heading>
  <span>CV</span>
</Heading>

<div class="flex-1 overflow-y-auto">
  <div class="mx-3 mb-5 sm:mx-5">
    <div class="flex flex-col gap-6">
      <div class="profile">
        <div class="items-center md:justify-center mb-2">
          <span class="text-xl sm:text-2xl lg:text-3xl text-yellow-500 fa fa-user mr-1"></span>
          <span class="text-xl sm:text-2xl lg:text-3xl font-bold">Profile</span>
        </div>
        <p class="mb-4">
          Full-stack software developer with five years' experience in Ruby on Rails and React. One
          of two primary engineers on the core backend of a production tutoring marketplace, working
          inside a mature codebase over a decade old. Strong in domain modelling and refactoring,
          third-party platform integrations, AI/LLM features, and data pipelines, much of it in
          money-critical systems where correctness matters. I work best inside established codebases:
          understanding systems I didn't write, extending them, and refactoring them safely without
          breaking what's live.
        </p>
      </div>

      <div class="experience">
        <div class="items-center justify-center mb-2">
          <span class="text-xl sm:text-2xl lg:text-3xl text-yellow-500 fa fa-briefcase mr-1"></span>
          <span class="text-xl sm:text-2xl lg:text-3xl font-bold">Experience</span>
        </div>

        <div class="mb-4">
          <span class="font-bold">Software Developer at Teach Me 2</span>
          <p class="text-yellow-500">Sep 2021 - Jun 2026</p>
          <p class="mb-2">Online tutor-matching service. Full-stack work across a Ruby on Rails API and React internal portals, as one of two primary backend engineers on a small team of 2 to 3 developers.</p>
          <ul class="list-disc list-outside pl-5 space-y-2">
            <li>Designed and refactored core domain models in a codebase over a decade old. This included reshaping a central recurring-billing domain into a proper subscription model and running a live migration that folded years of existing customer records into the new structure with no billing disruption.</li>
            <li>Built the company's first OpenAI/LLM integration: a production evaluation pipeline scoring user content against configurable rubrics, with templated prompts and schema-validated structured output.</li>
            <li>Delivered multiple third-party platform integrations end to end (OpenAI, an external coaching platform, lesson-transcript and messaging services, plus numerous smaller integrations), with backend order and state machines and two-way webhook sync through to operator-facing React UIs.</li>
            <li>Single-handedly designed and built a standalone Node.js pipeline (scrape, process, watermark, package) that generates the company's public matric past-papers library, owning it from blank repo to production.</li>
            <li>Built scheduled batch pipelines for financial reconciliation, including write-offs, invoice reconciliation, and dormant-account cleanup.</li>
            <li>Shipped features full-stack across two React portals and an admin dashboard, and adopted AI-assisted development as a daily Claude Code user to navigate unfamiliar code and ship changes with greater confidence.</li>
          </ul>
        </div>

        <div class="mb-4">
          <span class="font-bold">Junior Mobile App Developer (Internship) at Melon Stall</span>
          <p class="text-yellow-500">Nov 2019 - Jan 2021</p>
          <p>Early-career internship building and shipping cross-platform mobile applications. Built and released mobile apps end to end, from requirements through to Google Play Store releases, including a GPS and course-navigation tool deployed across roughly 40 devices at a golf resort.</p>
        </div>
      </div>

      <div class="skills">
        <div class="items-center justify-center mb-3">
          <span class="text-xl sm:text-2xl lg:text-3xl text-yellow-500 fa fa-wrench mr-1"></span>
          <span class="text-xl sm:text-2xl lg:text-3xl font-bold">Skills</span>
        </div>

        <div class="mb-4">
          <span class="font-bold">Tools & Languages</span>
          <div class="flex flex-wrap gap-2 mt-2">
            {#each toolsAndLanguages as skill}
              <span class="text-sm rounded-lg bg-gray-700 px-3 py-1">{skill}</span>
            {/each}
          </div>
        </div>

        <div class="mb-4">
          <span class="font-bold">Core Skills</span>
          <div class="flex flex-wrap gap-2 mt-2">
            {#each coreSkills as skill}
              <span class="text-sm rounded-lg bg-gray-700 px-3 py-1">{skill}</span>
            {/each}
          </div>
        </div>

        <div class="mb-4">
          <span class="font-bold">Secondary Skills</span>
          <div class="flex flex-wrap gap-2 mt-2">
            {#each secondarySkills as skill}
              <span class="text-sm rounded-lg bg-gray-700 px-3 py-1">{skill}</span>
            {/each}
          </div>
        </div>
      </div>

      <div class="education">
        <div class="items-center md:justify-center mb-2">
          <span class="text-xl sm:text-2xl lg:text-3xl text-yellow-500 fa fa-school mr-1"></span>
          <span class="text-xl sm:text-2xl lg:text-3xl font-bold">Education</span>
        </div>
        <div class="mb-4">
          <span class="font-bold">BSc Computing (part-time)</span>
          <p class="text-yellow-500">2017 - 2021</p>
          <p>University of South Africa (UNISA)</p>
          <p class="italic">Graduated Cum Laude</p>
        </div>

        <div class="mb-4">
          <span class="font-bold">National Diploma: Civil Engineering</span>
          <p class="text-yellow-500">2010 - 2012</p>
          <p>Nelson Mandela University</p>
          <p class="italic">Graduated Cum Laude</p>
        </div>
      </div>

      <div class="languages">
        <div class="items-center justify-center mb-2">
          <span class="text-xl sm:text-2xl lg:text-3xl text-yellow-500 fa fa-language mr-1"></span>
          <span class="text-xl sm:text-2xl lg:text-3xl font-bold">Languages</span>
        </div>
        <p>English: native</p>
      </div>
    </div>
  </div>
</div>

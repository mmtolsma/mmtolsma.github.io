<script>
	import Heading from '../../components/Heading.svelte';
</script>

<div>
	<Heading>
		<span>About Me</span>
	</Heading>
</div>

<div class="flex-1 overflow-y-auto">
  <div class="mx-3 mb-5 sm:mx-5">
    <!-- About me blurb -->
    <p>
      I am a full-stack software developer with five years of professional experience in Ruby on Rails and React, much of it as one of two primary engineers on the core backend of a production tutoring marketplace built inside a codebase over a decade old. I'm strong in domain modelling and safe refactoring, third-party platform integrations, AI/LLM features, and data pipelines, most of it in money-critical systems where correctness matters.
    </p>
    <br>
    <p>
      I work best inside established codebases: understanding systems I didn't write, extending them, and refactoring them safely without breaking what's live. I'm highly-motivated, work well independently and within a small team, and have discovered programming to be a genuine passion. I look forward to future challenges and to growing my knowledge and skill.
    </p>
    <br>
    <p>
      Earlier on I also cut my teeth in mobile: during an internship I built and shipped cross-platform apps with Flutter, from requirements through to Google Play releases, including a GPS course-navigation tool rolled out across roughly 40 devices at a golf resort.
    </p>
    
    <br>
    
    <!-- What I'm doing -->
    <div class="text-2xl lg:text-3xl font-bold mb-3">
      What I'm doing
    </div>
    <div class="grid grid-cols-1 xl:grid-cols-2 gap-5">
      <div class="bg-sub-card border border-sub-card-border text-center justify-center shadow-2xl rounded-2xl px-4 py-4 gap-4 sm:flex sm:items-start sm:text-start">
        <div class="flex flex-row justify-center sm:flex-none sm:justify-start">
          <img src="/frontend.svg" alt="webpage with html tag" class="w-12 h-12 p-1" />
        </div>
        <div class="sm:flex sm:flex-col">
          <div class="text-lg font-bold">
            Frontend Development
          </div>
          <div>
            Creating dynamic user interfaces with React and integrating with backend services.
          </div>
        </div>
      </div>        
      <div class="bg-sub-card border border-sub-card-border text-center justify-center shadow-2xl rounded-2xl px-4 py-4 gap-4 sm:flex sm:items-start sm:text-start">
        <div class="flex flex-row justify-center sm:flex-none sm:justify-start">
          <img src="/backend.svg" alt="og and database" class="w-12 h-12 p-1" />
        </div>
        <div class="sm:flex sm:flex-col">
          <div class="text-lg font-bold">
            Backend Development
          </div>
          <div>
            Developing and maintaining a scalable API using Ruby on Rails and managing data with ActiveRecord.
          </div>
        </div>
      </div>        
    </div>
  </div>
</div>

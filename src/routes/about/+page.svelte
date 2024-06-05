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
    <section>
      <p>
        I am a passionate Fullstack developer with three years of professional experience in creating and maintaining robust software solutions. Skilled in JavaScript with React for the front-end and Ruby on Rails for the back-end, I excel in developing fully integrated applications that meet diverse business needs.
      </p>
      <br>
      <p>
        Years of work experience has allowed me to develop personal skills including management, organisational and logistic skills. I am highly-motivated and work hard, and am able to work well independently and within a team. I have a good sense of humour and sharp wit, am patient with people and experienced with teaching. I have discovered programming to be a passion and look forward to future challenges and growing my knowledge, skill and passion.
      </p>
    </section>
    
    <br>

    <section>
      <div class="text-2xl lg:text-3xl mb-3">What I'm doing</div>

      <!-- TODO: Move icon above text on mobile -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div class="bg-sub-card border border-sub-card-border shadow-2xl rounded-2xl px-4 py-4 flex items-start gap-4">
          <img src="/frontend.svg" alt="webpage with html tag" class="w-12 h-12 p-1" />
          <div class="flex flex-col">
            <div class="text-lg font-bold">
              Frontend Development
            </div>
            <div>
              Creating dynamic user interfaces with React and integrating with backend services.
            </div>
          </div>
        </div>        
        <div class="bg-sub-card border border-sub-card-border shadow-2xl rounded-2xl px-4 py-4 flex items-start gap-4">
          <img src="/backend.svg" alt="og and database" class="w-12 h-12 p-1" />
          <div class="flex flex-col">
            <div class="text-lg font-bold">
              Backend Development
            </div>
            <div>
              Developing and maintaining a scalable API using Ruby on Rails and managing data with ActiveRecord.
            </div>
          </div>
        </div>        
      </div>
    </section>
  </div>
</div>

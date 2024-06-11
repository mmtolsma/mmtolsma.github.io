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
      I am a passionate fullstack developer with three years of professional experience in creating and maintaining robust software solutions. Skilled in JavaScript with React for the front-end and Ruby on Rails for the back-end, I excel in developing fully integrated applications that meet diverse business needs.
    </p>
    <br>
    <p>
      Years of work experience has allowed me to develop personal skills including management, organisational and logistic skills. I am highly-motivated and work hard, and am able to work well independently and within a team. I have a good sense of humour and sharp wit, am patient with people and experienced with teaching. I have discovered programming to be a passion and look forward to future challenges and growing my knowledge, skill and passion.
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

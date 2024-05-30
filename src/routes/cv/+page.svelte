<script>
  import Heading from "../../components/Heading.svelte";
</script>

<Heading>
  <span>CV</span>
</Heading>

<div class="flex-1 overflow-y-auto">
  <div class="mx-3 sm:mx-5">
    
    <div class="flex flex-col gap-3 justify-between xl:justify-normal">
      <div class="education">
        <div class="items-center md:justify-center mb-2">
          <span class="text-2xl lg:text-3xl text-yellow-500 fa fa-school mr-1"></span>
          <span class="text-2xl lg:text-3xl font-bold">Education</span>
        </div>
        
        <div class="mb-4">
          <span class="font-bold">High School</span>
          <p class="text-yellow-500">2003 - 2007</p>
          <p>Woodridge College</p>
        </div>
    
        <div class="mb-4">
          <span class="font-bold">National Diploma: Engineering: Civil</span>
          <p class="text-yellow-500">2010 - 2012</p>
          <p>Nelson Mandela University</p>
          <p class="italic">Graduated Cum Laude</p>
        </div>
    
        <div class="mb-4">
          <span class="font-bold">Bachelor of Science: Computing</span>
          <p class="text-yellow-500">2017 - 2021</p>
          <p>University of South Africa</p>
          <p class="italic">Graduated Cum Laude</p>
        </div>
      </div>

      <br>

      <div class="experience">
        <div class="items-center justify-center mb-2">
          <span class="text-2xl lg:text-3xl text-yellow-500 fa fa-briefcase mr-1"></span>
          <span class="text-2xl lg:text-3xl font-bold">Experience</span>
        </div>
        
        <div class="mb-4">
          <span class="font-bold">Scuba Diving Instructor at Pro Dive</span>
          <p class="text-yellow-500">Jan 2010 - Jan 2015</p>
          <p>Lead clients on shore and boat-based dives; taught new and experienced people how to scuba dive; handled bookings, phone calls, and scheduling.</p>
        </div>
        
        <div class="mb-4">
          <span class="font-bold">Ocean Blue Adventures</span>
          <p class="text-yellow-500">Jan 2015 - Dec 2018</p>
          <p>Volunteer coordinator: Creating, implementing and managing a daily schedule for international volunteers taking part in a marine-based program at the ORCA Foundation.</p>
          <p>Adventure tour guide: Tour guide for the commercial whale and dolphin watching company Ocean Blue Adventures.</p>
        </div>
        
        <div class="mb-4">
          <span class="font-bold">Junior Mobile/Flutter Android Developer Internship at Melon Stall</span>
          <p class="text-yellow-500">Nov 2019 - Jan 2021</p>
          <p>Going over feature requirements and making sure they're understood; using git/Github to manage changes; developing features against emulators and real devices; creating prototypes for more advanced features; handing over of APKs and deploying into Google Play Store.</p>
        </div>
    
        <div class="mb-4">
          <span class="font-bold">Junior Software Developer at Teach Me 2</span>
          <p class="text-yellow-500">Sep 2021 - Present</p>
          <p>Maintaining, upgrading, and enhancing the company website, which serves as a critical tool for staff to capture customer data, and customers to view important information. Ensure seamless functionality and user experience utilizing Ruby on Rails for backend development and JS/React for frontend development.</p>
        </div>
      </div>

      <div class="skills mb-5">
        <div class="items-center justify-center mb-2">
          <span class="text-2xl lg:text-3xl text-yellow-500 fa fa-wrench mr-1"></span>
          <span class="text-2xl lg:text-3xl font-bold">My Skills</span>
        </div>
        <p>Ruby/Ruby on Rails - Backend development</p>
        <p>Javascript/React - Frontend development</p>
        <p>Bootstrap</p>
        <p>Sveltekit - Basic</p> 
        <p>Tailwind - Basic</p> 
      </div>
    </div>

  </div>
</div>


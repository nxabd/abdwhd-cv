<script>
    export let jobs = [];

</script>

<section class="mt-10">
    <h1 class="text-2xl font-semibold">Work Experience</h1>
  
    {#each jobs as job}
    <div class="flex justify-between mt-2">
        <span class="font-medium">{job.company}</span>
        
        <p>{job.joinYear} - {job.endYear ? job.endYear : 'Sekarang' }
        </p>
    
    </div>
    <span>{job.role}</span>
    <p class="text-sm py-2">{job.description}</p>
    {/each}
</section>
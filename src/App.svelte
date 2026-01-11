<script>
	import { workExperience } from './lib/const.js';
  import About from "./components/About.svelte";
  import WorkSection from "./components/WorkSection.svelte";
  import Layout from "./layouts/BaseLayout.svelte";
  import SkillSection from './components/SkillSection.svelte';
  import ProjectSection from './components/ProjectSection.svelte';
</script>


<Layout>
    <About/>
    <WorkSection jobs= {workExperience}/>
    <SkillSection/>
    <ProjectSection/>
</Layout>
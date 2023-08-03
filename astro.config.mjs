import { defineConfig } from 'astro/config';

import react from "@astrojs/react";
import swup from '@swup/astro';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), swup()]
 
});
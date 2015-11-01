# angular2-gulp-starterpack
Basic gulp configuration for angularjs2 based on typescript and jade.

#How to start:
1. `git clone `
2. `npm install`
3. `gulp serve` (for serving files and creating application) 
or 
`gulp build` (coming soon) for creating dist.
4. Application will be on http://localhost:8888/

`gulp serve` 
- watching styles (compile SCSS to CSS)
- watching layouts (compile jade to html)
- watching scripts (compile typescript to javascript)
- serving files from .tmp to http://localhost:8888/


#Project structure:

`.tmp - directory generated for serving application`

`dev - developer version`

`dist - distribute version - coming soon`

#TODO:
- minify images
- create dist tasks

# Node Template

By: Stella Marie and Lindsay Warr

App for robots generated with dinosaur names.

View on [Github Pages](https://smkou.github.io/dino-ipsum/)

## **Technologies Used**

- HTML5
- CSS3
- Skeleton 2.0.4 by Dave Gamache
- Node.js
  - Webpack
  - ESLint
  - Jest
  - Babel

## **Description**

Node is a template repo for a basic Node.js project, outfitted with a bundler, linter, javascript converter, and test package. The file structure consists of the config files in the root, along with package.json for setup, and the folders, _ _ tests _ _ containing test files and src contained the development files. There is one sample test file in the tests folder, whereas src consists of assets, css and js with index.js and index.html. Assets is for images and fonts. It contains two subdirectories, img and fonts, both containing samples, the latter possessing a selection: Bebas Neue, League Spartan, Muli, Nunito Sans, Oswald, Ovo, and Ra Mono. Css is for stylesheets, and contains two sample files, fonts.css and styles.css. The present styles in the latter are derived from Skeleton 2.0.4 by Dave Gamache. Js is for interaction and functionality, and has two subdirectories, bs for business logic and ui for user interface logic.

## **Complete Setup**

- Navigate to main page of repo
- Above file list, click **Use this template**
- Dropdown: select **Create a new repository**
- Fill out create repo form

### **Local Setup**

- Navigate to your new repo
- Clone it

```bash
git clone .../.git
git pull origin main
```

**Do not forget:**

- Remove unwanted fonts from assets/fonts
- Remove sample img from assets/img

### **Change imports, exports and component files and tests**

Component.js is just a sample. Rename it and use it to contain just the logic of a single component. Components can be seen as handlers of an object, feature, or state.

Component.test.js is just a sample with a single test and describe. Each component should have a corresponding test file with the same name, but with an extension of .test.js, and the test file should only test the functionality of its corresponding component. Make sure you're importing what is needed for it to run.

## **Rendering**

**Github Pages**

```bash
git add .
git commit -m "Save final changes"
git push origin main
git checkout -b gh-pages
git push origin gh-pages
```

**To update Github Pages**

```bash
git add .
git commit -m "Save changes in main"
git push origin main
git checkout gh-pages
git merge main
git push origin gh-pages
```

### **How to render from dist/**

1. Remove dist/ from .gitignore

2.  
```bash
git add dist
git commit -m "Initial dist subtree commit"
```

3.  
```bash
git subtree push --prefix dist origin gh-pages
```

## **Known Bugs**

Please report any issues in using this template.

## **License**

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2023 Sm Kou

# Web Piano 

deployed site: https://webpiano.surge.sh/

## Installation 

To install the package, run this command in terminal
```
npm install piano-you-can-play@v0.2.9
```
Then you can import the package into a React component like this
```
import { Interface } from "piano-you-can-play";

function App() {
  return (
    <div>
    // ... 
      <Interface />
    </div>
  );
}

```
## Updating this Package

If you are updating this package, and want to create a new version, change the version number in package.json and in the "Installation" section of this Readme.
Then run these commands:
```
npm login
npm run build
npm publish
```
See here for more information: https://levelup.gitconnected.com/publish-react-components-as-an-npm-package-7a671a2fb7f
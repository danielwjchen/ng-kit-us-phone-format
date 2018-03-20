# ng kit US Phone Format
ng-kit US Phone Format is an angular $filter that converts strings to US phone format.

## Development
To create a environment from scratch, install all the following dependencies.
### NVM and NPM
```
nvm install 5
```
### NPM global packages
```
npm install -g grunt-cli@1.2.0 grunt@0.4.5 npm@3.8.6
```
## Usage
This filter expects a single string of only numbers, e.g. `5551234567` and converts it to `(555) 123-4567`.

### In Template
```HTML
<p>{{'5551234567' | usPhoneFormat}}</p>
<!-- Outputs <p>(555) 123-4567</p> -->
```

### In Controller

```JavaScript
function exampleController($filter) {
    $filter('usPhoneFormat', '5551234567'); // Outputs (555) 123-4567
};
```
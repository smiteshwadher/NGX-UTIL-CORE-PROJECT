# NgxUtilCore

This code contains all the reusable Services/Functions/Components which can be used in Angular/Ionic projects.

# Table Of Contents

1.   List Of Services
      - [Google Auth](https://www.npmjs.com/package/ngx-util-core#google-auth)

# Steps For Installing 

Run npm i ngx-util-core to install the package inside your project.

# After Installation

Import the NgxUtilCoreModule inside your app.module.ts using below line :

```typescript
import { NgxUtilCoreModule } from 'ngx-util-core'

imports: [
  NgxUtilCoreModule
]
```

After Successfully installing and importing the module you can now access the services associated within this package

# Google Auth

After the above step if you want to use the google sign-in service make sure you send the client-ID in json object manner as follows :- 

```typescript
//environment.ts

export const environment = {
  CLIENT_ID: 'google__client__id'
};

constructor(public googleAuthService: GoogleAuthService) { }

this.googleAuthService.googleSignIn(environment.CLIENT_ID).then(data => {
    console.log('Data Returned is', data);
}, (err) => {
    console.log('Error returned is ', err);
});
```

To use the sign-out function use the following function

```typescript
this.googleAuthService.googleSignOut();
```

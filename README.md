# Unmet Peer Dependency in React Native
This repository demonstrates a common yet elusive bug in React Native applications: unmet peer dependencies.  This can occur when a third-party library you've installed has dependencies that your project doesn't satisfy.  The error messages aren't always clear, making debugging challenging.

## Bug Description
When attempting to run the application, you will encounter errors related to missing modules. These may not explicitly mention peer dependencies.  The key is to identify that the missing modules are actually peer dependencies of a library you have installed.

## Solution
The solution involves carefully examining the package.json of the problematic library and installing the missing peer dependencies.  The package.json for this example clearly shows the peer dependencies. The solution file shows how to fix this using npm or yarn.
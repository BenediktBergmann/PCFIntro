# 10. Add React
To be able to build more complex PCFs (or use third party components) you most propably need React. In this chapter we will learn how to add it to our demo PCF.

## Goals
- Add react to PCF

## Todo's
In this section I will describe the tasks you have to execute to reach the goals of this chapter.

### Install react
First of all we have to install react. To do so we execute the following 2 commands in the terminal within VS code.
``` shell
npm install react react-dom
npm install @types/react --save-dev
```

### Add/Change files
To add react we have to add and change some files.

#### Add demo.tsx
We create a new folder "tsx" within our "DemoInputComponent" folder. In this folder we add a demo.tsx file.

To this file we add a very simple react component. It will take a value in the props and just renders a div which contains "React: <value>".
I will not explain react in this course, this would be to much to fit in.

```Typescript
import * as React from "react";

export interface IDemoProps {
    value: number | undefined
}

export class Demo extends React.Component<IDemoProps> {
    public render() {
        return (
            <div>
                React: {this.props.value?.toString()}
            </div>
        )
    }
}
```

#### index.ts
In the index.ts we have to change some stuff to achieve our goal.

##### Add imports
We have to import react, react-dom and our Demo component. To do so we add the following imports at the very beginning of the file.
```Typescript
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Demo } from "./tsx/demo";
```

##### Add variable
We will add another wrapper which should hold the react component.
```Typescript
private _reactwrapper: HTMLDivElement;
```

##### init function
We have to init the _reactwrapper and add it to the container as the last element we add.
```Typescript
this._reactwrapper = document.createElement("div");
container.appendChild(this._reactwrapper);
```

##### updateView function
At the end of the updateView function we will add the code to render our component.
```Typescript
ReactDOM.render(
    React.createElement(
	    Demo,
	    {value: this._value}
    ),
    this._reactwrapper
);
```

This function creates and renders a React element of type Demo with our value as the props to the _reactwrapper div.

### Test
As (nearly) always we deploy the PCF to Dataverse.
```
npm run build
pac pcf push -pp <prefix>
```

The PCF should now show "React: <value>" as the last part of the PCF

## Conclusion
You just added your first React component. Congratulations!
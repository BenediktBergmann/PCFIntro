# 6. Add Input
In this chapter we will learn how to add an input field to our demo PCF. With that it could be used to let the user input data.

## Goals
- Add input to PCF

## Todo's
In this section I will describe the tasks you have to execute to reach the goals of this chapter.

### Change files
To add the an input is a bit more complex than adding configuration. We have to change some files

#### index.ts
First of all we have to add 2 more variables to the DemoInputcomponent class. Those will hold the input html element and the actual value of the PCF.

```Typescript
private _input: HTMLInputElement;

private _value: number | undefined;
```

##### init function
We have to init our input. This will be done in the input function. To do so we will create a new element add some attributes (id and type) annd append it to the wrapper
We also set both the _value as well as the value of the input.
_
```Typescript
this._input = document.createElement("input");
this._input.setAttribute("id", "inputField");
this._input.setAttribute("type", "text");
this._input.value = context.parameters.input.raw?.toString() ?? "";

this._wrapper.appendChild(this._input);

this._value = context.parameters.input.raw ?? undefined;
```

##### updateView function
Everytime the input changes we have to change both the _value and the input.value. This is done in the updateView by setting them from the context.
```Typescript
this._input.value = context.parameters.input.raw?.toString() ?? "";
this._value = context.parameters.input.raw ?? undefined;
```

##### getOutputs function
To set the underlying field we have to respond with _value in the getOutputs function.

```Typescript
return {input: this._value};
```

### Test
We will again deploy the pcf to Dataverse.
```
npm run build
pac pcf push -pp <prefix>
```
It should now show an input in addition to the rest we created earlier. Unfortunately a change in the input value will not change the underlying coloumn, we will fix that in the next chapter.

## Conclusion
In this chapter you learned how to add an input to our PCF.
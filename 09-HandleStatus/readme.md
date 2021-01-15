# 9. Handle Status
One important thing is to handle the status of your PCF. With status I mean readonly or secured by field security.
There are different places where a input parameter could be stated as readonly or editable.
For the main input (where the PCF is configured on) it is in the context.mode. For every parameter it is in context.parameters.<parameter name>.security.

## Goals
- Handle status of PCF

## Todo's
In this section I will describe the tasks you have to execute to reach the goals of this chapter.

### Change files
To add the desired function is rather simple. We have to change one files.

#### index.ts
First we add another variable at the beginning of the class which holds the maskedVlaue.
```Typescript
private _maskValue = "******";
```

##### Change inputOnChange function

In the "inputOnChange" function we have to add the _maskValue as a condition of the if statement.
```Typescript
if(this._input.value !== this._emptyValue && this._input.value !== this._maskValue)
```

##### Change updateView function
We have to check whether the field is readonly or should be masked whenever something in the context changes. Therefore it has to be done in the updateView function.

To do so:
- Assign isControlDisabled from the context.mode to a local variable
- Check if security of the input parameter is set. If so we set
  -  readOnly when context.parameters.input.security.editable is false
  -  masked when context.parameter.input.security.readable is false
- set the readonly flag of the input to our readonly variable
- If the field should be masked we set our input value to _maskedValue 

```Typescript
let readOnly = context.mode.isControlDisabled;
let masked = false;

if (context.parameters.input.security){
	readOnly = readOnly || !context.parameters.input.security.editable;
	masked = !context.parameters.input.security.readable;
}

this._input.readOnly = readOnly;

if(masked){
	this._input.value = this._maskValue;
}
```

### Test
We again deploy the PCF to Dataverse.
```
npm run build
pac pcf push -pp <prefix>
```

#### Config in Dataverse
- Add the field another time to the form
- Add the PCF control
- Configure Field som "read only"

Now the input should be "disabled" on the last field.

## Conclusion
In this chapter you learned how to handle status changes of your PCF control.
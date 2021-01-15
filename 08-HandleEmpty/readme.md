# 8. Handle empty value
Usually a Dataverse field shows "---" if the value is empty. Another, maybe more important, thing is that it should clear the underlying coloumn value. In this chapter we learn how to do that.

## Goals
- Add handling for empty value to PCF

## Todo's
In this section I will describe the tasks you have to execute to reach the goals of this chapter.

### Change files
To add the function we would like to implement we, again, only change one file.

#### index.ts
Ath the beginning of the file we will add a new variable which holds the emptyValue.
```Typescript
private _emptyValue = "---";
```

##### Add function to check input
Next step would be to add a function which checks whether the input is correct or not. This function will later be called from two different places (inputOnChange and updateView).

The function should take one parameter of type string or null. It then check if the input is valid and a number.

If it is not it should show the empty value in the input field and set the _value variable to "undefined", which will clear the underlying coloumn.

If it is and
- the input differs from the input field value the input field value should be updated
- the _value variable differs from the input the _value variable should be updated

```Typescript
private checkInput(input: string | null){
	if(!input || parseInt(input) === NaN){
		this._input.value = this._emptyValue;
		this._value = undefined;
	} else {
		if(this._input.value !== input){
			this._input.value = input;
		}

		if(this._value !== parseInt(input)){
			this._value = parseInt(input);
		}
	}
}
```

##### Change Updateview function
As mentioned this function has to call our new checkInput function.
We delete the two rows that set both _value and the value of the input and replace it with a call to "chekcInput" where the parameter is the raw input of the context as string or "".
```Typescript
this.checkInput(context.parameters.input.raw?.toString() ?? "");
```

##### Change inputOnChange function
The "inputInChange" function has to call our new function as well.
Todo so we delete the row that sets the _value and replace it with a call to the new function where the parameter is the value of our input.
In addition to that we have to wrapp everything in an if statement. There we check whether the value if the input is the same as the emptyvalue. If so we do nothing otherwise we execute our code. This needs to be done to prevent infinity loops.

```Typescript
public inputOnChange():void{
	if(this._input.value !== this._emptyValue){
		this.checkInput(this._input.value);
		this._notifyOutputChanged();
	}
}
```

### Test
We again deploy the PCF to dataverse. Another option is to use fiddler to serve the updated bundle.js wihtout the need of deploying it to dataverse.
```
npm run build
pac pcf push -pp <prefix>
```

When you empty the field it should show "---".

## Conclusion
In this chapter we added handling for empty value.
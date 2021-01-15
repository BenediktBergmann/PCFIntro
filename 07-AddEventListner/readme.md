# 7. Add Event listner
As you could see in during the test of the previous chapter, a change in the field input would not change the underlying column value. In this chapter we will make that work.
This can be done by adding an event listner to the input field.


## Goals
- Add event listner to input field

## Todo's
In this section I will describe the tasks you have to execute to reach the goals of this chapter.

### Change files
To add the desired change we only have to change one files.

#### index.ts
Within the index file we have to do different things.
We have to add 2 additional variables at the beginning of our class. One to hold the event listner, _inputOnChange, and one to hold the notifyOutputChanged function, _notifyOutputChanged.
The notifyOutputChanged function has to be called when the value changed and we would like to notify the underlying coloumn about it.

```Typescript
private _notifyOutputChanged: () => void;
private _inputOnChange: EventListenerOrEventListenerObject;
```

##### Add function to handle change
Next step is to add a function which handles changes of the input. This function will be binded to the event listner later.
We will call it "inputOnChange", it should not have any parameters and be of type void. It is (for now) a quite simple function which only
- fills our _value with the input value (we have to parse it to int) and
- calls the notifyOutputChanged function

```Typescript
public inputOnChange():void{
	this._value = parseInt(this._input.value);
	this._notifyOutputChanged();
}
```

##### init function
At the end of the function we would like to
- copy the input notifyOutputChanged to our variable
- bind the inputOnChange function to the event listner variable
- add an event listner to our input to be called whenever the input changes

```Typescript
this._notifyOutputChanged = notifyOutputChanged;

this._inputOnChange = this.inputOnChange.bind(this);
this._input.addEventListener("change", this._inputOnChange);
```

##### destroy function
The last part is to cleanup when the PCF control gets destroyed. It is best practice to remove event listner which got added. This is also the reason why we save the event listner in a seperate variable.
To do so we add the following row to the destroy function.

```Typescript
this._input.removeEventListener("change",this._inputOnChange);
```

### Test
We will again deploy the pcf to Dataverse.
```
npm run build
pac pcf push -pp <prefix>
```

Now a change in the input should change the underlying coloumn as well.

## Conclusion
We learned how to add (and cleanup) event listners. This example was very simple, one could add events listners for every event an input has (onfocus, mouseenter, or mousleave. Just to mention some).
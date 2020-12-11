# 3. Adding CSS
In this chapter you will learn how to add CSS to your PCF as well as our simple validation.
What we would like to achieve, as mentioned earlier, is to show the value in green when it is within our range (>= min & <= max) and red when it is not.

## Goals
- Add CSS to the PCF
- Add validation

## Todo's
In this section I will describe the tasks you have to execute to reach the goals of this chapter.

### Create folder & files
First of all we have to create a new folder "css" in the "DemoInputComponent" folder.
In the newly created folder we add a new file "DemoInputComponent.css". This file will hold all our stylings.

### Update files
To achieve our goal we have to update some files.

#### ControlManifest.Input.xml
We have to tell the framework that it should include our css file in our bundle. To do so we will add the following row in the resources container of the Manifest.
``` XML
<css path="css/DemoInputComponent.css" order="1" />
```

With the "order" configuration one could decide in which order the files should be included (if there are dependencies for example).

#### index.ts
At the beginning of the class we have to add two new variables, _min and _max. Those will be used to validate whether the value is within range.
For now we hard code the values of those to 0 (min) and 100 (max).

``` Typescript
private _min: number = 0;
private _max: number = 100;
```

##### updateView function
In the updateView we have to add our check and add/remove a css class, invalid, to our element based on whether the value is within range.
To achieve this we use the add/remove function of the classList of our element.

```Typescript
if(context.parameters.input.raw && context.parameters.input.raw >= this._min && context.parameters.input.raw <= this._max){
	this._element.classList.remove("invalid");
} else {
	this._element.classList.add("invalid");
}
```

#### DemoInputComponent.css
In the CSS we would like to change the color of our span element to green and to red when its invalid.

``` CSS
.DemoInputComponent span{
    color: green;
}

.DemoInputComponent span.invalid{
    color: red;
}
```

### Test
The only thing left in this chapter is to test our changes.
There are 2 options for that
1. Redeploy the control to Dataverse.

IMPORTANT: Always increase the third part of the version in the Manifest before deploying to Dataverse. Otherwise the change might not be reflected. Never change the first 2 parts of the version since this will result in a second instance of the PCF within the datavers (like we have it with major version of plugins).
```
npm run build
pac pcf push -pp <prefix>
```

2. Start the PCF test harniss.
This can be done with the following command

```
npm start
```

The harniss is only working for pcfs of type field.

When changing the value the color of the number should change based on whether she is within range (0-100) or not.

## Conclusion
As you could see getting css working is a bit different to normal frontend development.
But it is not very complicated either.
# 4. Add Image
In this chapter we will learn the easiest way of using images within your PCF. We will add small icons which indicate whether the value is within range or not.

## Goals
- Learn how to add images to our PCF.

## Todo's
In this section I will describe the tasks you have to execute to reach the goals of this chapter.

### Create folder & copy images
Within the "DemoInputComponent" folder we create another folder called "img".
In the folder "04-Image" you can find two images (error.png and success.png) copy both to the newly created "img" folder.

### Update files
To achieve our goal we have to update some files.

#### ControlManifest.Input.xml
We have to tell the framework that it should include our images in our bundle. To do so we will add the following row in the resources container of the Manifest.
``` XML
<img path="img/success.png" />
<img path="img/error.png" />
```

#### index.ts
Again we have to update the index.ts file.

We would like to wrapp our span, which contains the value, and our div, which will contain our icons, within a wrapper div.
This div will get the "invalid" class if the value isn't in range.
Since we have to access this element later (add/remove css class) we have to define it as an variable as well.
Add the following line to the beginning of the class.
```Typescript
private _wrapper: HTMLDivElement;
```

##### init function
In the init function we have to
- create a new div element
- assign it to our wrapper variable
- append the span element to our wrapper
- create a div element for the icon
- add the css class "icon" to it
- append the icon element to our wrapper
- change that not the span element but the wrapper elment will be appended to the context.

This can be done with the following code
```Typescript
this._wrapper = document.createElement("div");
this._wrapper.appendChild(this._element);

let icon = document.createElement("div");
icon.classList.add("icon");
this._wrapper.appendChild(icon);
```

The whole function should now look like this
```Typescript 
public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement)
{
	this._wrapper = document.createElement("div");
	this._element = document.createElement("span");
	this._element.innerHTML = context.parameters.input.raw ? context.parameters.input.raw.toString() : "";

	this._wrapper.appendChild(this._element);

	let icon = document.createElement("div");
	icon.classList.add("icon");
	this._wrapper.appendChild(icon);

	container.appendChild(this._wrapper);
}
```

##### updateView function
In the if and else part of the updateView function we have to change that we add/remove the css class to our new wrapper and not to the span element.

The if should look like this
```Typescript
if(context.parameters.input.raw && context.parameters.input.raw >= this._min && context.parameters.input.raw <= this._max){
	this._wrapper.classList.remove("invalid");
} else {
	this._wrapper.classList.add("invalid");
}
```

#### DemoInputComponent.css
To add our icons to the "holding" div we have to
- add them as background images
- define the width of the div
- define the height of the div

Our standard will be to show the success image, but when the wrapper div has the "invalid" class we will change to the error image.
We have to change the current scss selectors to take our additional wrapper in consideration.
So we change them to 
``` CSS
.DemoInputComponent div span
```

and

``` CSS
.DemoInputComponent div.invalid span
```

In addition to that we have to add the styling of the icon.
Below is the code for that.

```CSS
.DemoInputComponent div .icon{
    width:10px;
    height:10px;

    background-image: url("../img/success.png");
    background-size: contain;
    background-repeat:no-repeat;
}

.DemoInputComponent div.invalid .icon{
    background-image: url("../img/error.png");
}
```

### Test
The last step, as always, is to test our changes. Feel free to either deploy to Dataverse (remember the version) or start the harniss.

## Conclusion
As you see it is quite easy to add an image via css as a background imge.
If one needs to have the image within an image tag for example the solution gets a bit more complicated. You can read more about that on [my blog](https://benediktbergmann.eu/2020/04/22/pcf-how-to-use-images-in-component/).
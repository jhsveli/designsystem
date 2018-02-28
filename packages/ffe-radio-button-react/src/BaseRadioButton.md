Intern komponent som brukes til å lage andre radioknapper. Skal **ikke brukes direkte**, og er ikke en del av det offentlige APIet.

Vanlige knapper:
```js
const { buttonType } = require('./BaseRadioButton');
<fieldset>
    <legend>What's your type of pizza?</legend>
    <BaseRadioButton 
        type={buttonType.REGULAR} 
        name="pizzaType" 
        value="pepperoni"
    >
        Pepperoni
    </BaseRadioButton>
    <BaseRadioButton 
        type={buttonType.REGULAR} 
        name="pizzaType" 
        value="margharita"
    >
        Margharita
    </BaseRadioButton>
    <BaseRadioButton 
        type={buttonType.REGULAR} 
        name="pizzaType" 
        value="taco"
    >
        Taco
    </BaseRadioButton>
</fieldset>
```

Inline knapper
```js
const { buttonType } = require('./BaseRadioButton');
<fieldset>
    <legend>What's your type of pizza?</legend>
    <BaseRadioButton 
        type={buttonType.REGULAR} 
        inline={true}
        name="pizzaType" 
        value="pepperoni"
    >
        Pepperoni
    </BaseRadioButton>
    <BaseRadioButton 
        type={buttonType.REGULAR} 
        inline={true}
        name="pizzaType" 
        value="margarita"
    >
        Margarita
    </BaseRadioButton>
    <BaseRadioButton 
        type={buttonType.REGULAR} 
        inline={true}
        name="pizzaType" 
        value="taco"
    >
        Taco
    </BaseRadioButton>
</fieldset>
```

Ja / Nei knapper:

```js
const { buttonType } = require('./BaseRadioButton');
<fieldset>
    <legend>Do you even pizza bro?</legend>
    <BaseRadioButton 
        type={buttonType.SWITCH} 
        inline={true}
        name="pizzaType" 
        value={true}
    >
        Yes
    </BaseRadioButton>
    <BaseRadioButton 
        type={buttonType.SWITCH} 
        inline={true}
        name="pizzaType" 
        value={false}
    >
        No
    </BaseRadioButton>
</fieldset>
```

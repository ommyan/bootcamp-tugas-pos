# Lazy Kitten Redux Form

Lazy Kitten Redux Form contains component forms sucs as input, radio button, checkbox and picker, created to facilitate the use of redux-form.

Lazy Kitten Redux Form use components from [React Native](https://facebook.github.io/react-native/) and [React Native UI Kitten](https://akveo.github.io/react-native-ui-kitten/)

## Getting Started

### Requirements

* State management project using redux
* Available redux-form in project. if not, start [here](https://redux-form.com/7.3.0/docs/gettingstarted.md/)

### Installation

```
npm install --save lazy-kitten-redux-form
```

## Components

### LkTextInput

* Syntax

```
import { LkTextInput } from 'lazy-kitten-redux-form';

// in render function
<Field
  name="name"
  component={LkTextInput}
  label="Name"
  placeholder="Input name here."
/>
```

* Additional Field Configuration

| Property | Type | Required | Description |
| -------- | -------- | -------- | ----------- |
| `label` | string | no | Text header field |
| `placeholder` | string | no | - |
| `style` | obj / StyleSheet | no | Style for container field |
| `inputStyle` | obj / StyleSheet | no | Style for input |
| `labelStyle` | obj / StyleSheet | no | Style for label |

### LkRadioButton

* Syntax

```
import { LkRadioButton } from 'lazy-kitten-redux-form';

//in render function
<Field
  name="gender"
  component={LkRadioButton}
  label="Choose Gender"
  items={[
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
    {label: 'Other', value: 'other'}
  ]}
/>
```

* Additional Field Configuration

| Property | Type | Required | Description |
| -------- | -------- | -------- | ----------- |
| `label` | string | no | Text header field |
| `items` | array of obj | yes | items for radio button |

  *Note: property `label` and `value` inside array of obj items is required*

### LkCheckBox

* Syntax

```
import { LkCheckbox } from 'lazy-kitten-redux-form';

//in render function
<Field
  name="hobies"
  component={LkCheckbox}
  label="Choose Hobies"
  items={[
    {label: 'Football', value: 'football'},
    {label: 'Batminton', value: 'batminton'},
    {label: 'Swimming', value: 'swimming'},
  ]}
/>
```

* Additional Field Configuration

| Property | Type | Required | Description |
| -------- | -------- | -------- | ----------- |
| `label` | string | no | Text header field |
| `items` | array of obj | yes | items for Checkbox |

  *Note: property `label` and `value` inside array of obj items is required*

### LkPicker

* Syntax

```
import { LkPicker } from 'lazy-kitten-redux-form';

//in render function
<Field
  name="language"
  component={LkPicker}
  label="Select Language"
  items={[
    {label: 'Php', value: 'php'},
    {label: 'Javascript', value: 'js'},
    {label: 'Java', value: 'java'},
    {label: 'C', value: 'c'},
    {label: 'Golang', value: 'golang'},
    {label: 'Python', value: 'python'}
  ]}
/>
```

* Additional Field Configuration

| Property | Type | Required | Description |
| -------- | -------- | -------- | ----------- |
| `label` | string | no | Text header field |
| `items` | array of obj | yes | items for Picker |

  *Note: property `label` and `value` inside array of obj items is required*

### Example App

[https://github.com/DumbwaysDotId/example-lazy-kitten-redux-form](https://github.com/DumbwaysDotId/example-lazy-kitten-redux-form)
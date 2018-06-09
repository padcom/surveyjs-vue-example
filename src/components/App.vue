<template>
  <div>
    <survey :survey="survey" />
    <pre>{{ results }}</pre>
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

import { Model } from 'survey-vue'

const json = {
  questions: [
    {
      name: 'name',
      type: 'text',
      title: 'Please enter your name:',
      placeHolder: 'Jon Snow',
      isRequired: true,
    },
    {
      name: 'birthdate',
      type: 'text',
      inputType: 'date',
      title: 'Your birthdate:',
      isRequired: true,
    },
    {
      name: 'color',
      type: 'text',
      inputType: 'color',
      title: 'Your favorite color:',
    },
    {
      name: 'email',
      type: 'text',
      inputType: 'email',
      title: 'Your e-mail:',
      placeHolder: 'jon.snow@nightwatch.org',
      isRequired: true,
      validators: [
        {
          type: 'email',
        },
      ],
    },
  ],
}

@Component({})
export default class App extends Vue {
  survey = new Model(json)
  results = null

  created () {
    this.survey.onComplete.add(result => { this.results = result.data })
  }
}
</script>

<style lang='scss'>
</style>

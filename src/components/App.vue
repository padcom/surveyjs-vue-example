<template>
  <div>
    <survey :survey="survey" />
  </div>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'
import { Survey, Model } from 'survey-vue'

@Component({})
export default class App extends Vue {
  survey = new Model({ surveyId: '4246421e-19f6-4982-a69e-894a13576d75' })

  created () {
    this.survey.surveyPostId = '32d44468-af61-407e-aa0e-649a6329decd'
    this.survey.locale = 'pl'
    this.survey.surveyShowDataSaving = true
    const plLocale = Survey.surveyLocalization.locales['pl']
    plLocale.loadingSurvey = 'Test....'
  }
}
</script>

<style lang='scss'>
</style>

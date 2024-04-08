import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'CloitAssignment',

  setup () {
    return () => h(QBadge, {
      class: 'CloitAssignment',
      label: 'CloitAssignment'
    })
  }
}

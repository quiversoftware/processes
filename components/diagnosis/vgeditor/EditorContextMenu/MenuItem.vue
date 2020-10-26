<template>
  <command :name="command">
    <div class="item">
      <icon :type="iconType" />
      <span>{{ label }}</span>
    </div>
  </command>
</template>

<script>
import upperFirst from 'lodash/upperFirst'
import Icon from '../Icon'

export default {
  name: 'MenuItem',

  components: {
    Icon,
  },

  // eslint-disable-next-line vue/require-prop-types
  props: ['command', 'icon', 'text'],

  computed: {
    iconType() {
      return `icon-${this.icon || this.command}`
    },

    label() {
      return this.text || upperFirst(this.command)
    },
  },
}
</script>

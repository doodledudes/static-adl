<template lang="pug">
  div
    side-menu(:visible='isVisible', :mobile='isMobile')
    top-menu(:visible.sync='isVisible')
    .admin-wrap
      .container.is-fluid

        section(v-if="haveLoginservice")
          .columns
            .column
              .content
                h4.title.is-4 My Profile
              //- content
              .card
                .card-content
                  br
                  authservice-user-details(:tenant="$authservice.user.tenant", :user-id="$authservice.user.id", change-password)

                //- card-content
              //- card
            //- column
          //- columns

        //- section
      //- container
    //- section
  //- div
</template>

<script>

import SideMenu from '~/components/SideMenuAgent.vue'
import TopMenu from '~/components/TopMenu.vue'
import { Toggle } from '~/mixins/toggle.js'

export default {
  layout: 'admin',
  components: {
    'top-menu': TopMenu,
    'side-menu': SideMenu
  },
  mixins: [Toggle],
  computed: {
    haveLoginservice: function () {
      if (this.$authservice) {
        return true
      }
      return false
    }
  },
}

</script>

<style>

</style>

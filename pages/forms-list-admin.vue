<template lang="pug">
  div
    side-menu(:visible='isVisible', :mobile='isMobile')
    top-menu(:visible.sync='isVisible')
    .admin-wrap
      .container.is-fluid
        section
          .columns
            .column
              .content
                h4.title.is-4 Forms / Templates
              //- content
              .card
                .card-content
                  table.table.is-striped.is-fullwidth
                    thead
                      tr
                        th Form Name
                        th
                      //- tr
                    //- thead
                    tbody
                      tr
                        td AUQLDREPMT13 - RTA Form  9 - Entry Notice [effective from 1st July 2009]
                        //- td
                        td.has-text-right
                          router-link(to="/form-sample-1")
                            i.fas.fa-folder-open
                          //- router-link
                        //- td
                      //- tr
                      tr
                        td AUQLDREPMT15 - RTA Form 11 - Notice to Remedy Breach
                        //- td
                        td.has-text-right
                          router-link(to="/form-sample-2")
                            i.fas.fa-folder-open
                          //- router-link
                        //- td
                      //- tr
                    //- tbody
                  //- table
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

import SideMenu from '~/components/SideMenuAdmin.vue'
import TopMenu from '~/components/TopMenu.vue'
import { Toggle } from '~/mixins/toggle.js'

export default {
  layout: 'admin',
  components: {
    'top-menu': TopMenu,
    'side-menu': SideMenu
  },
  mixins: [Toggle]
}

</script>

<style>

</style>

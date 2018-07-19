<template lang="pug">
  div
    side-menu(:visible='isVisible', :mobile='isMobile')
    top-menu(:visible.sync='isVisible')
    .admin-wrap
      .container.is-fluid
        section
          h4.title.is-4 AUQLDREPMT13 - RTA Form  9 - Entry Notice [effective from 1st July 2009]
          .card
            .card-content
              .columns
                .column
                  label.label Name/s and address of the tenant/s
                  .field.is-grouped
                    p.control.is-expanded
                      input.input(type="text", placeholder="")
                    //- p
                    p.control
                      input.input(type="text", placeholder="Postcode")
                    //- p
                    p.control
                      router-link.button.is-success(to="") Add New
                    //- p
                  //- field
                  
                  hr
                  
                  label.label.is-numbered(data-number="1") Address of the rental property&nbsp;
                    small.has-text-info (if different from above)
                  //- label
                  .field.is-grouped
                    p.control.is-expanded
                      input.input(type="text", placeholder="")
                    //- p
                    p.control
                      input.input(type="text", placeholder="Postcode")
                    //- p
                  //- field
                  
                  .field
                    label.label.is-numbered(data-number="2") Notice issued by
                    .control
                      .block
                        b-checkbox(type="is-success") Property owner
                        b-checkbox(type="is-success") Property manager
                        b-checkbox(type="is-success") Property Other authorised person (secondary agent)
                      //- block
                    //- control
                  //- field
                  .field.is-grouped
                    p.control.is-expanded
                      input.input(type="text", placeholder="Full name/trading name")
                    //- p
                    p.control
                      input.input(type="text", placeholder="Phone")
                    //- p
                  //- field
                  
                  label.label.is-numbered(data-number="3") Details of all people entering
                  .field.is-grouped
                    p.control.is-expanded
                      input.input(type="text", placeholder="Full name/trading name")
                    //- p
                    p.control
                      input.input(type="text", placeholder="Phone")
                    //- p
                    p.control
                      router-link.button.is-success(to="") Add New
                    //- p
                  //- field
                  
                  label.label.is-numbered(data-number="4") Notice issued on
                  .field.is-grouped
                    p.control
                      input.input(type="text", placeholder="Day")
                    //- p
                    p.control
                      input.input(type="date", placeholder="Date")
                    //- p
                    p.control.is-expanded
                      input.input(type="text", placeholder="Method of issue (e.g. email, post, in person)")
                    //- p
                  //- field
                  
                  label.label.is-numbered(data-number="2") Entry is sought under the following grounds
                  .columns
                    .column
                      .field
                        b-checkbox(type="is-success") Property
                      //- field
                      .field
                        b-checkbox(type="is-success") Property
                      //- field
                      .field
                        b-checkbox(type="is-success") Property
                      //- field
                      .field
                        b-checkbox(type="is-success") Property
                      //- field
                      .field
                        b-checkbox(type="is-success") Property
                      //- field
                    //- column
                    .column
                      .field
                        b-checkbox(type="is-success") Property
                      //- field
                    //- column
                  //- columns
                  
                //- column
              //- columns
            //- card-content
          //- card
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

<template lang="pug">
  div
    side-menu(:visible='isVisible', :mobile='isMobile')
    top-menu(:visible.sync='isVisible')
    .admin-wrap
      .container.is-fluid
        section
          .columns
            .column.is-half
              .content
                h4.title.is-4 Agent Statistics
              //- content
              .card
                .card-content
                  .columns
                    .column
                      .field
                        label.label Agent
                        .control
                          .select.is-100p
                            select
                              option Select Agent
                              option Rodan Luzuriaga
                              option Aravind Naidu
                            //- select
                          //- .select
                        //- control
                      //- field
                    //- column
                  //- columns
                  .columns.is-multiline
                    .column
                      .field
                        label.label From
                        .control
                          input.input(type="date", placeholder="")
                        //- control
                      //- field
                    //- column
                    .column
                      .field
                        label.label To
                        .control
                          input.input(type="date", placeholder="")
                        //- control
                      //- field
                    //- column
                  //- columns

                  chartjs-bar(:height="100")

                //- card-content
              //- card
            //- column
            .column.is-half
              .content
                h4.title.is-4 Form Usage
              //- content
              .card
                .card-content
                  .columns
                    .column
                      .field
                        label.label Agent
                        .control
                          .select.is-100p
                            select
                              option Select Agent
                              option Ronald Basco
                              option Billy Bulasco
                            //- select
                          //- .select
                        //- control
                      //- field
                    //- column
                  //- columns
                  .columns.is-multiline
                    .column
                      .field
                        label.label From
                        .control
                          input.input(type="date", placeholder="")
                        //- control
                      //- field
                    //- column
                    .column
                      .field
                        label.label To
                        .control
                          input.input(type="date", placeholder="")
                        //- control
                      //- field
                    //- column
                  //- columns

                  chartjs-line(:height="100")

                //- card-content
              //- card
            //- column
          //- columns
          .columns
            .column.is-half
              .content
                h4.title.is-4 Manage Templates
              //- content
              .card
                .card-content
                  table.table.is-striped.is-fullwidth
                    thead
                      tr
                        th Package
                        th Form Name
                        th Template Name
                      //- tr
                    //- thead
                    tbody
                      tr
                        td NSW Property Sales
                        td Buyers Agency Agreement
                        td BAA 1
                      //- tr
                      tr
                        td NSW Property Sales
                        td Sales Insp. Report
                        td SIR 1
                      //- tr
                      tr
                        td NSW Property Sales
                        td Sales Insp. Report (Rural)
                        td SIR 2
                      //- tr
                    //- tbody
                  //- table
                //- card-content
              //- card
            //- column
            .column.is-half
              .content
                h4.title.is-4 Quick Links
              //- content
              .card
                .card-content
                  table.table.is-striped.is-fullwidth
                    thead
                      tr
                        th Action
                      //- tr
                    //- thead
                    tbody
                      tr
                        td Create/Manger Users
                      //- tr
                      tr
                        td Company Profile
                      //- tr
                      tr
                        td Reports
                      //- tr
                      tr
                        td Manage Lists
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

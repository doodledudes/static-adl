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
                h4.title.is-4 My Tasks
              //- content
              .card
                .card-content
                  .tabs
                    ul
                      li.is-active
                        a(data-target="tabInWorkflow") In Workflow
                      //- li
                      li
                        a(data-target="tabMyAgents") My Agents
                      //- li
                      li
                        a(data-target="tabMyProperties") My Properties
                      //- li
                      li
                        a(data-target="tabUpcoming") Upcoming
                      //- li
                    //- ul
                  //- tabs
                  .tab-content.is-active#tabInWorkflow
                    table.table.is-striped.is-fullwidth
                      thead
                        tr
                          th Property
                          th Package
                          th Form
                          th Status
                          th Owner
                          th
                        //- tr
                      //- thead
                      tbody
                        tr
                          td 12TishlerStWright
                          td NSWPropertySales
                          td EntryNotice
                          td waitingapproval
                          td Manager1
                          td.has-text-right
                            a.has-tooltip(href="", title="Approval")
                              i.fas.fa-check
                            //- a
                          //- td
                        //- tr
                        tr
                          td 100 Borburn St Sydney
                          td NSW Property Mgt
                          td Tenancy Application
                          td waiting completion
                          td Tenant
                          td.has-text-right
                            a.has-tooltip(href="", title="Message")
                              i.fas.fa-envelope
                            //- a
                          //- td
                        //- tr
                      //- tbody
                    //- table
                  //- tab-content
                  .tab-content#tabMyAgents
                    h1 My Agents
                  //- tab-content
                  .tab-content#tabMyProperties
                    h1 My Properties
                  //- tab-content
                  .tab-content#tabUpcoming
                    h1 Upcoming
                  //- tab-content
                //- card-content
              //- card
            //- column
          //- columns
          .columns
            .column.is-4
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
                            select(onchange="fetchData(agentStatsChart, this)")
                              option Select Agent
                              option Jeffrey Dela Cruz
                              option Laurence Hernandez
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
                  canvas#graphAgentStats
                //- card-content
              //- card
            //- column
            .column.is-4
              .content
                h4.title.is-4 Form Stats
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
                              option Select dropdown
                              option With options
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
                  table.table.is-striped.is-fullwidth
                    thead
                      tr
                        th Form Name
                        th Number
                      //- tr
                    //- thead
                    tbody
                      tr
                        td Form A
                        td 30
                      //- tr
                      tr
                        td Form B
                        td 24
                      //- tr
                      tr
                        td Form C
                        td 15
                      //- tr
                      tr
                        td Form D
                        td 8
                      //- tr
                      tr
                        td Form E
                        td 4
                      //- tr
                    //- tbody
                  //- table
                //- card-content
              //- card
            //- column
            .column.is-4
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
                        td Create User
                      //- tr
                      tr
                        td Reports
                      //- tr
                      tr
                        td Manage Templates
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

import SideMenu from '~/components/SideMenuManager.vue'
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

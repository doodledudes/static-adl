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
                        a(data-target="tabInCreation") In Creation
                      //- li
                      li
                        a(data-target="tabInWorkflow") In Workflow
                      //- li
                      li
                        a(data-target="tabCompleted") Completed
                      //- li
                      li
                        a(data-target="tabMyProperties") My Properties
                      //- li
                      li
                        a(data-target="tabUpcoming") Upcoming
                      //- li
                    //- ul
                  //- tabs
                  .tab-content.is-active#tabInCreation
                    table.table.is-striped.is-fullwidth
                      thead
                        tr
                          th Property
                          th Package
                          th Form
                          th Version
                          th
                        //- tr
                      //- thead
                      tbody
                        tr
                          td 12TishlerStWright
                          td NSWPropertySales
                          td EntryNotice
                          td 1.1
                          td.has-text-right
                            a.has-tooltip(href="", title="Edit")
                              i.fas.fa-pencil-alt
                            //- a
                          //- td
                        //- tr
                        tr
                          td 100 Borburn St Sydney
                          td NSW Property Mgt
                          td Tenancy Application
                          td 1.3
                          td.has-text-right
                            a.has-tooltip(href="", title="Edit")
                              i.fas.fa-pencil-alt
                            //- a
                          //- td
                        //- tr
                      //- tbody
                    //- table
                  //- tab-content
                  .tab-content#tabInWorkflow
                    table.table.is-striped.is-fullwidth
                      thead
                        tr
                          th Property
                          th Package
                          th Form
                          th Version
                          th Status
                          th Owner
                          th
                        //- tr
                      //- thead
                      tbody
                        tr
                          td 12 Tishler St Wright
                          td NSW Property Sales
                          td Entry Notice
                          td 1.1
                          td
                            | 1
                            sup st
                            |  Approval
                          td Manager 1
                          td.has-text-right
                            a.has-tooltip(href="", title="Message")
                              i.fas.fa-envelope
                            //- a
                          //- td
                        //- tr
                        tr
                          td 100 Borburn St Sydney
                          td NSW Property Mgt
                          td Tenancy Application
                          td 1.3
                          td Approval
                          td Manager 2
                          td.has-text-right
                            a.has-tooltip(href="", title="Message")
                              i.fas.fa-envelope
                            //- a
                          //- td
                        //- tr
                      //- tbody
                    //- table
                  //- tab-content
                  .tab-content#tabCompleted
                    table.table.is-striped.is-fullwidth
                      thead
                        tr
                          th Property
                          th Package
                          th Form
                          th Version
                          th Completed Date
                          th
                        //- tr
                      //- thead
                      tbody
                        tr
                          td 12 Tishler St Wright
                          td NSW Property Sales
                          td Entry Notice
                          td 1.1
                          td 12/05/2018
                          td.has-text-right
                            a.has-tooltip(href="", title="View")
                              i.fas.fa-file-pdf
                            //- a
                          //- td
                        //- tr
                        tr
                          td 100 Borburn St Sydney
                          td NSW Property Mgt
                          td Tenancy Application
                          td 1.3
                          td 11/05/2018
                          td.has-text-right
                            a.has-tooltip(href="", title="View")
                              i.fas.fa-file-pdf
                            //- a
                          //- td
                        //- tr
                      //- tbody
                    //- table
                  //- tab-content
                  .tab-content#tabMyProperties
                    .columns
                      .column.is-4
                        .field
                          label.label Property Search
                          .control.has-icons-right
                            input.input.is-medium(type="text", placeholder="Property Address", value="")
                            span.icon.is-small.is-right
                              i.fas.fa-search
                            //- span
                          //- control
                        //- field
                        .message.message-body.is-info
                          p.is-size-4 Property Details
                          br
                          table
                            tr
                              th Address
                              td 12, Tishler Street Wright ACT 2600
                            //- tr
                            tr
                              th Property Type
                              td --
                            //- tr
                            tr
                              th(colspan="2")
                                br
                              //- th
                            //- tr
                            tr
                              th Owner
                              td --
                            //- tr
                            tr
                              td Tel
                              td --
                            //- tr
                            tr
                              td Email
                              td --
                            //- tr
                            tr
                              th(colspan="2")
                                br
                              //- th
                            //- tr
                            tr
                              th Tenant (if applicable)
                              td
                            //- tr
                            tr
                              td Tel
                              td --
                            //- tr
                            tr
                              td Email
                              td --
                            //- tr
                          //- table
                        //- message
                        .has-text-centered
                          a.button.is-medium.is-success(href="")
                            i.fas.fa-file-alt
                            | &nbsp;View Forms
                      //- column
                      .column
                        div#myPropertyForms
                          p.is-size-4 My Property Forms
                          p &nbsp;
                          .message.message-body.is-grey
                            .columns
                              .column
                                .columns
                                  .column
                                    strong Address
                                  //- column
                                  .column
                                    p 12, Tishler Street Wright ACT 2600
                                  //- column
                                //- columns
                                .columns
                                  .column
                                    strong Property Type
                                  //- column
                                  .column
                                    p --
                                  //- column
                                //- columns
                              //- column
                              .column
                                .columns
                                  .column
                                    strong Owner
                                  //- column
                                  .column
                                    p --
                                  //- column
                                //- columns
                                .columns
                                  .column
                                    strong Tel
                                  //- column
                                  .column
                                    p --
                                  //- column
                                //- columns
                                .columns
                                  .column
                                    strong Email
                                  //- column
                                  .column
                                    p --
                                  //- column
                                //- columns
                              //- column
                              .column
                                .columns
                                  .column
                                    strong Tenant (if applicable)
                                  //- column
                                  .column
                                    p --
                                  //- column
                                //- columns
                                .columns
                                  .column
                                    strong Tel
                                  //- column
                                  .column
                                    p --
                                  //- column
                                //- columns
                                .columns
                                  .column
                                    strong Email
                                  //- column
                                  .column
                                    p --
                                  //- column
                                //- columns
                              //- column
                            //- columns
                          //- message
                          table.table.is-striped.is-fullwidth
                            thead
                              tr
                                th Package
                                th Form
                                th Version
                                th Completed Date
                                th Agent
                                th
                              //- tr
                            //- thead
                            tbody
                              tr
                                td NSW Property Sales
                                td Entry Notice
                                td 1.1
                                td 12/05/2018
                                td Agent 1
                                td.has-text-right
                                  a.has-tooltip(href="", title="View")
                                    i.fas.fa-file-pdf
                                  //- a
                                //- td
                              //- tr
                              tr
                                td NSW Property Mgt
                                td Tenancy Application
                                td 1.3
                                td 11/05/2018
                                td Agent 1
                                td.has-text-right
                                  a.has-tooltip(href="", title="View")
                                    i.fas.fa-file-pdf
                                  //- a
                                //- td
                              //- tr
                            //- tbody
                          //- table
                        //- div
                      //- columns
                    //- columns
                  //- tab-content
                  .tab-content#tabUpcoming
                    table.table.is-striped.is-fullwidth
                      thead
                        tr
                          th Property
                          th Activity
                          th Due Date
                          th Form
                          th
                        //- tr
                      //- thead
                      tbody
                        tr
                          td 12 Tishler St Wright
                          td Inspection
                          td 25/05/2018
                          td Routine Inspection
                          td.has-text-right
                            a.has-tooltip(href="", title="Create")
                              i.fas.fa-edit
                            //- a
                          //- td
                        //- tr
                        tr
                          td 100 Borburn St Sydney
                          td Tenancy Renewal
                          td 30/05/2018
                          td Tenancy Application
                          td.has-text-right
                            a.has-tooltip(href="", title="Create")
                              i.fas.fa-edit
                            //- a
                          //- td
                        //- tr
                      //- tbody
                    //- table
                  //- tab-content
                //- card-content
              //- card
            //- column
          //- columns
          .columns
            .column
              .content
                h4.title.is-4 My Favourites
              //- content
              .card
                .card-content
                  .tabs
                    ul
                      li.is-active
                        a(data-target="tabForms") Forms
                      //- li
                      li
                        a(data-target="tabTemplates") Templates
                      //- li
                    //- ul
                  //- tabs
                  .tab-content.is-active#tabForms
                    table.table.is-striped.is-fullwidth
                      thead
                        tr
                          th Package
                          th Form Name
                          th
                        //- tr
                      //- thead
                      tbody
                        tr
                          td NSW Property Sales
                          td Buyers Agency Agreement
                          td.has-text-right
                            a.has-tooltip(href="", title="Edit")
                              i.fas.fa-pencil-alt
                            //- a
                          //- td
                        //- tr
                        tr
                          td NSW Property Sales
                          td Sales Insp. Report
                          td.has-text-right
                            a.has-tooltip(href="", title="Edit")
                              i.fas.fa-pencil-alt
                            //- a
                          //- td
                        //- tr
                      //- tbody
                    //- table
                  //- tab-content
                  .tab-content#tabTemplates
                    h1 Templates
                  //- tab-content
                //- card-content
              //- card
            //- column
            .column
              .content
                h4.title.is-4 My Merges
              //- content
              .card
                .card-content
                  table.table.is-striped.is-fullwidth
                    thead
                      tr
                        th File Name
                        th Date / Time
                        th
                      //- tr
                    //- thead
                    tbody
                      tr
                        td PMS Merge 1
                        td 14/05/18 11:00
                        td.has-text-right
                          a.has-tooltip(href="", title="Open")
                            i.fas.fa-folder-open
                          //- a
                        //- td
                      //- tr
                      tr
                        td PMS Merge 2
                        td 13/05/18 14:05
                        td.has-text-right
                          a.has-tooltip(href="", title="Open")
                            i.fas.fa-folder-open
                          //- a
                        //- td
                      //- tr
                    //- tbody
                  //- table
                //- card-content
              //- card
            //- column
            .column.is-3
              .content
                h4.title.is-4 My Lists
              //- content
              .card
                .card-content
                  table.table.is-striped.is-fullwidth
                    thead
                      tr
                        th List Name
                        th
                      //- tr
                    //- thead
                    tbody
                      tr
                        td List 1
                        td.has-text-right
                          a.has-tooltip(href="", title="Edit")
                            i.fas.fa-pencil-alt
                          //- a
                        //- td
                      //- tr
                      tr
                        td List 2
                        td.has-text-right
                          a.has-tooltip(href="", title="Edit")
                            i.fas.fa-pencil-alt
                          //- a
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

import SideMenu from '~/components/SideMenuAgent.vue'
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

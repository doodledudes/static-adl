<template lang="pug">
  section.hero.is-fullheight.is-dark.landing
    .hero-body
      .container
        .columns
          .column.is-5.is-offset-1
            .blurb
              .blurb-heading
                .content
                  h1.title.is-1 Forms Made Simple
                  h3.subtitle Legal Forms You Can Trust
                //- content
              //- blurb-heading
            //- blurb
          //- column
          .column.is-5



            loginservice-login(@userchange="onUserChange")



            //- br
            //- .card.login-as
            //-   .card-content
            //-     .content
            //-       h3.title.is-3.has-text-black Login as
            //-       .field
            //-         .control.has-icons-left
            //-           .select.is-medium.is-100p
            //-             select.user-type
            //-               option(value="admin") Company / Admin
            //-               option(value="manager") Manager
            //-               option(value="agent") Agent
            //-             //- select
            //-             span.icon.is-small.is-left
            //-               i.fas.fa-user
            //-             //- span
            //-           //- .select
            //-         //- control
            //-       //- field
            //-       .field
            //-         .control.has-icons-left
            //-           input.input.is-medium(type="text", placeholder="Email", value="")
            //-           span.icon.is-small.is-left
            //-             i.fas.fa-envelope
            //-           //- span
            //-         //- control
            //-       //- field
            //-       .field
            //-         .control.has-icons-left
            //-           input.input.is-medium(type="password", placeholder="Password", value="")
            //-           span.icon.is-small.is-left
            //-             i.fas.fa-key
            //-           //- span
            //-         //- control
            //-       //- field
            //-       br
            //-       .field.is-grouped
            //-         .control
            //-           router-link.button.is-success.is-medium.login-button(to="dashboard-admin")
            //-             | Login
            //-           //- router-link
            //-         //- control
            //-       //- field
            //-     //- content
            //-   //- card-content
            //- //- card
          //- column
        //- columns
      //- container
    //- hero-body
  //- section
</template>

<script>
export default {
  methods: {
    onUserChange () {
      if (this.$authservice.user) {
        this.$router.push('/dashboard-admin')
      }
    }
  }
}
</script>

<style>

</style>

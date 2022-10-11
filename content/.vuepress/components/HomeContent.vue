<template>
<div>
  <h2 class="text-center">
    <span class="text-primary">Chaotischer Catalysator</span><br>
    Stipendien - 2022.Winter
  </h2>
  <p class="text-center">
    Mit dem “Chaotischen Catalysator Stipendien #CCS” werden fürs
    Wintersemester 2022 vier Stipendien für Masterarbeiten vergeben. Jedes
    Stipendium wird in Höhe von insgesamt 1.500€ gefördert.
  </p>
  <div class="row section">
    <div class="col-md-7">
      <h2 class="text-primary">
        Schaffe Mehrwert
      </h2>
      <p>
        Wir suchen dabei nach Themen, die sich die
        Informationstechnologien dieser Welt genauer
        anschauen, ihren Einfluss auf die Gesellschaft
        untersuchen und Ideen entwickeln, wie die Welt
        nach den Grundsätzen der Hacker*innen-Ethik
        verbesserbar ist.
      </p>
    </div>
    <div class="col">
      <img src="../../assets/img2.png" class="flow" alt="">
    </div>
  </div>
  <div class="row section">
    <div class="col">
      <img src="../../assets/img3.png" class="flow" alt="">
    </div>
    <div class="col-md-7">
      <h2 class="text-primary">
        Habe Einfluss
      </h2>
      <p>
        Dabei ist es ganz egal, ob du aus dem Bereich
        Wirtschaft, Politik, Sozialwissenschaft, Technik
        oder Kunst kommst - wir wollen deinen Bezug
        auf die Fragen rund um das Thema
        “Informationstechnologie” erfahren und als
        Mehrwert für die Gesellschaft fördern. Denn
        zwischen Buzzwords wie “digitale
        Transformation”, “Big Data”, “Effizienz”,
        “Innovation” spielen neben Daten und
        Anwendungen auch ethische Grundsätze und
        Fragestellungen in der modernen Welt eine
        Rolle.
      </p>
    </div>
  </div>
  <div class="row section">
    <div class="col-md-7">
      <h2 class="text-primary">
        Wie kann ich mich bewerben?
      </h2>
      <p>
        Um dich auf ein Stipendium zu bewerben, musst
        du folgendes Formular ausfüllen. Bitte lies dir
        vorher die Förderbedingungen durch.
      </p>
    </div>
    <div class="col">
      <img src="../../assets/img2.png" class="flow" alt="">
    </div>
  </div>
  <h2 class="text-center">
    <span class="text-primary">
      Chaotischer Catalysator Stipendien -
    </span><br>
    Bewirb dich jetzt für das Jahr 2022
  </h2>
  <p class="text-center">
    Nach dem Eingang deiner Bewerbung wird diese dem Beirat zur Verfügung
    gestellt. Wir versuchen dir möglichst schnell eine Zusage oder Absage zu
    erteilen. Bei letzterer kannst du nach Wunsch eine kurze Begründung
    bekommen. Aufgrund der ehrenamtlichen Natur des Beirats können wir keine
    ausführlichen Begründungen liefern.
  </p>
  <h2 class="text-primary text-center">Kontakt Formular</h2>
  <p class="section">
    Um dich auf ein Stipendium zu bewerben musst du folgendes Formular ausfüllen.
    Bitte lies dir vorher die <router-link to="/#stipendiumsbedingungen">Förderbedingungen</router-link> durch.
    Nach dem Eingang deiner Bewerbung wird diese dem Beirat zur Verfügung gestellt. Wir versuchen dir möglichst schnell eine Zusage oder Absage zu erteilen. Bei letzterer kannst du nach Wunsch eine kurze Begründung bekommen. Aufgrund der ehrenamtlichen Natur des Beirats können wir keine ausführlichen Begründungen liefern.
  </p>
  <form class="section">
    <div class="row my-2">
        <div class="form-group col">
          <label for="name">Vorname</label>
          <input type="text" class="form-control" id="name" placeholder="">
        </div>
        <div class="form-group col">
          <label for="surname">Nachname</label>
          <input type="text" class="form-control" id="surname" placeholder="">
        </div>
    </div>
    <div class="row my-2">
      <div class="form-group col">
        <label for="name">Name der Hochschule</label>
        <input type="text" class="form-control" id="name" placeholder="">
      </div>
      <div class="form-group col">
        <label for="email">E-Mail-Adresse</label>
        <input type="text" class="form-control" id="email" placeholder="">
      </div>
    </div>
    <div class="row my-2">
      <div class="form-group col">
        <label for="startDate">Startdatum</label>
        <input type="date" class="form-control" id="startDate" placeholder="yyyy-mm-dd" min="2022-01-01" max="2030-01-01">
      </div>
      <div class="form-group col">
        <label for="email">E-Mail-Adresse</label>
        <input type="text" class="form-control" id="email" placeholder="">
      </div>
    </div>
    <div class="row my-2">
      <div class="form-group col">
        <label for="surname">Bewerbung / Beruendung der Themenwahl</label>
        <textarea type="text" class="form-control" id="surname" placeholder="" />
      </div>
    </div>
    <div class="row my-2">
      <div class="col">
        <input type="checkbox" id="termsOfUse" class="">
        <label for="termsOfUse">
          Ich habe die Förderbedingungen gelesen und willige ein
        </label>
      </div>
    </div>
    <div class="row my-2">
      <div class="col">
        <button class="btn btn-primary">Abschicken</button>
      </div>
    </div>
  </form>
  <div class="row section">
    <div class="col">
      <img src="../../assets/img4.png" class="flow" alt="">
    </div>
    <div class="col-md-7">
      <h2 class="text-primary">
        Musterfragen, die dir
        beim
        Bewerbungsprozess
        helfen:
      </h2>
      <ul>
        <li>
          Welchen Mehrwert bringt Open Data für xyz?
        </li>
        <li>
          In welchen Ländern Regionen gibt es sehr wenig
          staatliche Überwachungsmaßnahmen und hängt
          das mit xyz zusammen?
        </li>
        <li>
          entwickeln sich Unternehmen, die auf Open Data
          setzen, besser als andere?
        </li>
        <li>
          Inwieweit ist Datenschutz relevant für generelle
          Konsumentscheidungen?
        </li>
      </ul>
    </div>
  </div>
  <div class="row section">
    <div class="col-md-7">
      <h2 class="text-primary">
        Sozialwissenschaften:
      </h2>
      <ul>
        <li>
          Inwieweit wird durch Datenschutz eine künstlerische
          Freiheit geschützt?
        </li>
        <li>
          Wie definiert sich der ethische Umgang mit der
          Nutzung von Open Source?
        </li>
        <li>
          Welche Gestaltungsfreiheit gibt es im sozialen
          Umgang in einer digitalen Welt?
        </li>
        <li>
          Möglichkeiten und Grenzen von
          Überwachungsmaßnahmen: Wie viel hält ein Mensch /
          ein System aus?
        </li>
      </ul>
    </div>
    <div class="col">
      <img src="../../assets/img5.png" class="flow" alt="">
    </div>
  </div>
  <div class="row section">
    <div class="col">
      <img src="../../assets/img4.png" class="flow" alt="">
    </div>
    <div class="col-md-7">
      <h2 class="text-primary">
        Wirtschaft und Politik:
      </h2>
      <ul>
        <li>
          DWelchen Einfluss hat die Informationstechnologie auf
          das Wahlverhalten der Bürger*innen?
        </li>
        <li>
          Inwiefern verändert sich das soziale Gefälle durch die
          Mehrfachnutzung von Open Source Anwendungen?
        </li>
        <li>
          Welchen Einfluss gewinnen Institutionen bei digitalen
          Verantwortungen?
        </li>
        <li>
          Inwiefern kann eine digitale Vielfalt auf den
          Fachkräftemangel reagieren?
        </li>
        <li>
          Welche Antworten liefern Open Source Anwendungen
          auf die Bildungspolitik der Länder? Möglichkeiten und
          Grenzen der Bildungspolitik
        </li>
        <li>
          Welche Trends und Einflussfaktoren sind in der Nutzung
          von Open Source im deutschen Mittelstand
          wahrzunehmen?
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "HomeContent"
}
</script>

<style scoped lang="scss">
h2 {
  margin: 2rem 0;
  font-size: 2.5rem;
  font-weight: bold;
}
.row.section {
  margin: 4rem 0;
}
.col{
  padding: 0 2rem;
}
img.flow {
  border-radius: 3rem;
  aspect-ratio: 1;
  object-fit: cover;
  width: 100%;
  box-shadow: .5rem .5rem 1rem #222a;
}
p, ul {
  font-size: 1.2rem;
}
</style>

<template>
  <div>
    <h1 class="text-center" id="headline">Stipendien - 2022.Winter</h1>
    <p class="text-center">
      Mit dem “Chaotischen Catalysator Stipendien #CCS” werden fürs
      Wintersemester 2022 vier Stipendien für Masterarbeiten vergeben. Jedes
      Stipendium wird in Höhe von insgesamt 1.500€ gefördert.
    </p>
    <div class="row section">
      <div class="col-md-7">
        <h2 class="text-primary">Schaffe Mehrwert</h2>
        <p>
          Wir suchen dabei nach Themen, die sich die Informationstechnologien
          dieser Welt genauer anschauen, ihren Einfluss auf die Gesellschaft
          untersuchen und Ideen entwickeln, wie die Welt nach den Grundsätzen
          der Hacker*innen-Ethik verbesserbar ist.
        </p>
      </div>
      <div class="col text-center image-container">
        <div>
          <img
            src="../../assets/41366316404_6da486eb34_c.jpg"
            class="flow"
            alt="Baum mit leuchtenden LED Stripes"
          />
          <a
            href="https://www.flickr.com/photos/leahoswald/41366316404/in/album-72157693638155552/"
            >Leah Oswald</a
          >,
          <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>
        </div>
      </div>
    </div>
    <div class="row section">
      <div class="col text-center image-container">
        <div>
          <img
            src="../../assets/48014359776_c90ee30f82_c.jpg"
            class="flow"
            alt="Mechanischer geh Roboter aus Holzbauteilen"
          />
          <a
            href="https://www.flickr.com/photos/leahoswald/48014359776/in/album-72157708956624971/"
            >Leah Oswald</a
          >,
          <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>
        </div>
      </div>
      <div class="col-md-7">
        <h2 class="text-primary">Habe Einfluss</h2>
        <p>
          Dabei ist es ganz egal, ob du aus dem Bereich Wirtschaft, Politik,
          Sozialwissenschaft, Technik oder Kunst kommst - wir wollen deinen
          Bezug auf die Fragen rund um das Thema “Informationstechnologie”
          erfahren und als Mehrwert für die Gesellschaft fördern. Denn zwischen
          Buzzwords wie “digitale Transformation”, “Big Data”, “Effizienz”,
          “Innovation” spielen neben Daten und Anwendungen auch ethische
          Grundsätze und Fragestellungen in der modernen Welt eine Rolle.
        </p>
      </div>
    </div>
    <div class="row section">
      <div class="col-md-7">
        <h2 class="text-primary">Wie kann ich mich bewerben?</h2>
        <p>
          Um dich auf ein Stipendium zu bewerben, musst du folgendes Formular
          ausfüllen. Bitte lies dir vorher die Förderbedingungen durch.
        </p>
      </div>
      <div class="col text-center image-container">
        <div>
          <img
            src="../../assets/49287961713_3a33cbd1e4_c.jpg"
            class="flow"
            alt="Fairydust in der Leipzeiger Messe Eingangshalle"
          />
          <a
            href="https://www.flickr.com/photos/leahoswald/49287961713/in/album-72157712400345071/"
            >Leah Oswald</a
          >,
          <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>
        </div>
      </div>
    </div>
    <!--
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
  -->
    <h2 class="text-center">
      <span class="text-primary"> Chaotischer Catalysator Stipendien - </span
      ><br />
      Bewirb dich jetzt für das Jahr 2022
    </h2>
    <p class="section text-center">
      Um dich auf ein Stipendium zu bewerben musst du folgendes Formular
      ausfüllen.<br />
      Bitte lies dir vorher die
      <router-link to="/#stipendiumsbedingungen">Förderbedingungen</router-link>
      durch. Nach dem Eingang deiner Bewerbung wird diese dem Beirat zur
      Verfügung gestellt. Wir versuchen dir möglichst schnell eine Zusage oder
      Absage zu erteilen. Bei letzterer kannst du nach Wunsch eine kurze
      Begründung bekommen. Aufgrund der ehrenamtlichen Natur des Beirats können
      wir keine ausführlichen Begründungen liefern.
    </p>
    <form
      method="POST"
      action="http://localhost:3000"
      class="section"
      id="bewerben"
    >
      <div class="row my-2">
        <div class="form-group col">
          <label for="name">Name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            name="name"
            placeholder=""
            required
            value="testName"
          />
        </div>
        <div class="form-group col">
          <label for="pronoun">Pronomen (optional)</label>
          <input
            type="text"
            class="form-control"
            id="pronoun"
            name="pronoun"
            placeholder=""
            value="testPronomen"
          />
        </div>
      </div>
      <div class="row my-2">
        <div class="form-group col">
          <label for="email">E-Mail-Adresse</label>
          <input
            type="email"
            class="form-control"
            id="email"
            name="email"
            placeholder=""
            required
            value="testemail@email.de"
          />
        </div>
        <div class="form-group col">
          <label for="phonenumber">Telefonnummer (optional)</label>
          <input
            type="tel"
            class="form-control"
            id="phonenumber"
            name="phonenumber"
            placeholder=""
            value="testTelefonnummer"
          />
          <span
            >bitte leerlassen wenn nur per E-Mail kommuniziert werden soll</span
          >
        </div>
      </div>
      <div class="row my-2">
        <div class="form-group col">
          <label for="hochschule">Hochschule/Universität</label>
          <input
            type="text"
            class="form-control"
            id="hochschule"
            name="hochschule"
            placeholder=""
            required
            value="testHochschule"
          />
        </div>
        <div class="form-group col">
          <label for="startdate">(geplantes) Startdatum</label>
          <input
            type="date"
            class="form-control"
            id="startdate"
            name="startdate"
            placeholder=""
            required
            value="2021-01-01"
          />
        </div>
      </div>
      <div class="row my-2">
        <div class="form-group col">
          <label for="thesisName">Titel der Masterarbeit</label>
          <input
            type="text"
            class="form-control"
            id="thesisName"
            name="thesisName"
            placeholder=""
            required
            value="testThesisMasterarbeit"
          />
        </div>
      </div>
      <div class="row my-2">
        <div class="form-group col">
          <label for="institutProfessor">Institut/Professur (optional)</label>
          <input
            type="text"
            class="form-control"
            id="institutProfessor"
            name="institutProfessor"
            placeholder=""
            value="testInstitut"
          />
        </div>
      </div>
      <div class="row my-2">
        <div class="form-group col">
          <label for="thesisTask"
            >Wie ist die Aufgabenstellung deiner Arbeit? max. 1000
            Zeichen</label
          >
          <textarea
            type="text"
            class="form-control"
            id="thesisTask"
            name="thesisTask"
            rows="2"
            placeholder=""
            max="1000"
            required
          >
testAufgabenstellung</textarea
          >
        </div>
      </div>
      <div class="row my-2">
        <div class="form-group col">
          <label for="reasonApplicationThesis"
            >Warum passt deine Arbeit ins Thema? max. 1000 Zeichen</label
          >
          <textarea
            class="form-control"
            name="reasonApplicationThesis"
            id="reasonApplicationThesis"
            rows="4"
            max="1000"
            required
          >
testWarum</textarea
          >
        </div>
      </div>
      <div class="row my-2">
        <div class="form-group col">
          <label for="reasonApplicationPerson"
            >Erzähl uns etwas über dich? max. 1000 Zeichen</label
          >
          <textarea
            class="form-control"
            name="reasonApplicationPerson"
            id="reasonApplicationPerson"
            rows="4"
            max="1000"
            required
          >
testErzähl</textarea
          >
        </div>
      </div>
      <div class="row my-2">
        <div class="form-group col">
          <label for="captcha"
            >Captcha: Wie heißt die nördlichste Stadt Deutschlands?</label
          >
          <input
            type="text"
            class="form-control"
            id="captcha"
            name="captcha"
            placeholder="Flensburg"
            required
            value="flensburg"
          />
        </div>
      </div>
      <div class="row my-2">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            value="true"
            id="approval"
            name="approval"
            required
          />
          <label class="form-check-label" for="approval">
            Ich habe die Förderbedingungen gelesen und willige ein
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-success">Abschicken</button>
    </form>
    <div class="row section">
      <div class="col text-center image-container">
        <div>
          <img
            src="../../assets/27667957447_5137ae86e8_c.jpg"
            class="flow"
            alt="Junger Mensch mit VR Brille und Kopfhörern auf dem Kopf"
          />
          <a href="https://www.flickr.com/photos/ctfl/27667957447/"
            >Chaostreff Flensburg</a
          >,
          <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 1.0</a>
        </div>
      </div>
      <div class="col-md-7">
        <h2 class="text-primary">
          Musterfragen, die dir beim Bewerbungsprozess helfen:
        </h2>
        <ul>
          <li>Welchen Mehrwert bringt Open Data für xyz?</li>
          <li>
            In welchen Ländern Regionen gibt es sehr wenig staatliche
            Überwachungsmaßnahmen und hängt das mit xyz zusammen?
          </li>
          <li>
            entwickeln sich Unternehmen, die auf Open Data setzen, besser als
            andere?
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
        <h2 class="text-primary">Sozialwissenschaften:</h2>
        <ul>
          <li>
            Inwieweit wird durch Datenschutz eine künstlerische Freiheit
            geschützt?
          </li>
          <li>
            Wie definiert sich der ethische Umgang mit der Nutzung von Open
            Source?
          </li>
          <li>
            Welche Gestaltungsfreiheit gibt es im sozialen Umgang in einer
            digitalen Welt?
          </li>
          <li>
            Möglichkeiten und Grenzen von Überwachungsmaßnahmen: Wie viel hält
            ein Mensch / ein System aus?
          </li>
        </ul>
      </div>
      <div class="col text-center image-container">
        <div>
          <img
            src="../../assets/38514211235_cf83decce2_c.jpg"
            class="flow"
            alt="Beleuchtete Glashalle in Leipzig"
          />
          <a
            href="https://www.flickr.com/photos/leahoswald/38514211235/in/album-72157664143705788/"
            >Leah Oswald</a
          >, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>
        </div>
      </div>
    </div>
    <div class="row section">
      <div class="col text-center image-container">
        <div>
          <img
            src="../../assets/49287968448_da6d385313_c.jpg"
            class="flow"
            alt="In der Farbe Orange leuchtender Kristall"
          />
          <a
            href="https://www.flickr.com/photos/leahoswald/49287968448/in/album-72157712400345071/"
            >Leah Oswald</a
          >, <a href="https://creativecommons.org/licenses/by/2.0/">CC BY 2.0</a>
        </div>
      </div>
      <div class="col-md-7">
        <h2 class="text-primary">Wirtschaft und Politik:</h2>
        <ul>
          <li>
            Welchen Einfluss hat die Informationstechnologie auf das
            Wahlverhalten der Bürger*innen?
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
            Inwiefern kann eine digitale Vielfalt auf den Fachkräftemangel
            reagieren?
          </li>
          <li>
            Welche Antworten liefern Open Source Anwendungen auf die
            Bildungspolitik der Länder? Möglichkeiten und Grenzen der
            Bildungspolitik
          </li>
          <li>
            Welche Trends und Einflussfaktoren sind in der Nutzung von Open
            Source im deutschen Mittelstand wahrzunehmen?
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeContent",
};
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
.col {
  padding: 0 2rem;
}
.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
}
img.flow {
  border-radius: 3rem;
  aspect-ratio: 1;
  object-fit: cover;
  width: 100%;
  box-shadow: 0.5rem 0.5rem 1rem #222a;
}
p,
ul {
  font-size: 1.2rem;
}
</style>

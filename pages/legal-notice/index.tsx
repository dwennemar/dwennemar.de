import {Text} from '@nextui-org/react';

export default function LegalNotice() {
  return (
    <div className="impressum">
      <Text h2>Angaben gem&auml;&szlig; &sect; 5 TMG</Text>
      <Text margin={0.5}>
        Daniel Wennemar<br/>
        Grevener Stra&szlig;e 156<br/>
        48159 M&uuml;nster
      </Text>
      <Text margin={1}>
        contact@dwennemar.de
      </Text>

      <Text h3 margin={1}>Haftung f&uuml;r Inhalte</Text>
      <Text margin={1}>
        Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG f&uuml;r eigene
        Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir
        als
        Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder gespeicherte fremde Informationen
        zu &uuml;berwachen
        oder nach Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen.
      </Text>
      <Text margin={1}>
        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben
        hiervon unber&uuml;hrt.
        Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
        m&ouml;glich.
        Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
      </Text>
      <Text h3 margin={1}>Haftung f&uuml;r Links</Text>
      <Text margin={1}>
        Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
        haben. Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r
        die
        Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die
        verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche
        Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft.
        Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
      </Text>
      <Text margin={1}>
        Eine permanente inhaltliche Kontrolle
        der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
        Bekanntwerden
        von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </Text>
      <Text h3 margin={1}>Urheberrecht</Text>
      <Text margin={1}>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
        Urheberrecht.
        Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au&szlig;erhalb der Grenzen des
        Urheberrechtes bed&uuml;rfen der
        schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur
        f&uuml;r
        den privaten, nicht kommerziellen Gebrauch gestattet.
      </Text>
      <Text margin={1}>
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber
        erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
        gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend
        entfernen.
      </Text>

      <Text>Quelle:&nbsp;<a href="https://www.e-recht24.de">e-recht24.de</a></Text>
    </div>
  )
}

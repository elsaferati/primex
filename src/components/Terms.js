// src/Terms.js
import React from "react";
import "../styles/Terms.css";

const Terms = () => {
  return (
    <div id="terms" className="terms-container">
      <h1 className="terms-title">Terms and Conditions</h1>

      <section>
        <h2>1. Allgemein</h2>
        <p><strong>1.1 Vertragsparteien</strong><br/>
        Die im Leistungsvereinbarung genannte PrimEx Gesellschaft (nachfolgend „PrimEx“) bietet Geschäftskunden Software-as-a Service-Lösungen und andere Dienstleistungen an.</p>
        <p><strong>1.2 Vertragsabschluss</strong><br/>
        Der Vertrag zwischen PrimEx und dem Kunden kommt zustande durch Unterzeichnung des Leistungsvereinbarung innerhalb der dort angegebenen Frist. Der Vertrag besteht aus dem Leistungsvereinbarung sowie den dort angegebenen Anlagen, inklusive dieser Terms (nachfolgend „Terms“).</p>
        <p><strong>1.3 Geltungsbereich</strong><br/>
        Diese Terms regeln die Bereitstellung und Nutzung von durch PrimEx angebotenen Leistungen und Produkten (im Folgenden zusammenfassend als „Services” bezeichnet).</p>
      </section>

      <section>
        <h2>2. Begriffsbestimmungen</h2>
        <p>Für die in diesen Terms verwendeten großgeschriebenen Begriffe gelten die im Folgenden festgelegten Bedeutungen:</p>
        <p>„Abonnementlaufzeit“ bezeichnet die im jeweiligen Leistungsvereinbarung angegebene Laufzeit eines Abonnements des Kunden über die Nutzung des Cloud-Services, einschließlich aller Verlängerungen.</p>
        <p>„Autorisierter Nutzer“ bezeichnet jede Person, der der Kunde in Übereinstimmung mit den Vertragsbestimmungen eine Zugangsberechtigung zur Nutzung des Cloud-Services erteilt und die ein Mitarbeiter, ein Auftragnehmer, den der Kunde speziell im Zusammenhang mit der Nutzung der Cloud-Services beauftragt hat, oder ein Vertreter des Kunden oder eines mit dem Kunden Verbundenen Unternehmens ist.</p>
        <p>„Beratungsdienstleistungen“ sind professionelle Dienstleistungen, wie z.B. Implementierungen, Consulting und Schulungen, die von Mitarbeitern oder Unterauftragnehmern von PrimEx erbracht werden.</p>
        <p>„Leistungsvereinbarung“ bezeichnet das Bestelldokument für einen Service, das auf diese Terms verweist.</p>
        <p>„Cloud-Service“ bezeichnet jede abonnementbasierte, gehostete, unterstützte und betriebene Softwarelösung, die von PrimEx im Rahmen eines Leistungsvereinbarung als Teil der Services bereitgestellt wird.</p>
        <p>„Kundendaten“ sind alle Inhalte, Daten und Informationen, die Autorisierte Nutzer des Kunden im Rahmen der Inanspruchnahme der Services in das Produktionssystem des Cloud-Service eingeben sowie kundenspezifische Inhalte von Berichten, die der Kunde über den Cloud-Service generiert.</p>
        <p>„Leistungsbeschreibung“ bezeichnet die als Anlage zum Leistungsvereinbarung aufgenommene Beschreibung des Leistungs- und Funktionsumfangs des jeweiligen Service.</p>
        <p>„Materialien“ sind alle Materialien, Daten und Inhalte, die von PrimEx (selbständig oder unter Mitwirkung des Kunden) im Rahmen der Erfüllung des Vertrags bereitgestellt oder entwickelt werden, auch bei der Erbringung von Support- oder Beratungsdienstleistungen für den Kunden. Kundendaten sowie Vertrauliche Informationen des Kunden sind nicht Bestandteil der Materialien.</p>
        <p>„Nutzungsmetrik“ bezeichnet den Messstandard zur Bestimmung der zulässigen Nutzung und zur Berechnung der fälligen Gebühren für den Service, wie er in einem Leistungsvereinbarung festgelegt ist.</p>
        <p>„Professional Services“ bezeichnet Dienstleistungen, die gemäß dem Vertrag von PrimEx oder von beauftragten Unterauftragnehmern für den Kunden erbracht werden. Dies können insbesondere, aber nicht ausschließlich, Beratungsdienstleistungen, Implementierungen, Anpassungen oder Schulungen sein.</p>
        <p>„Verbundenes Unternehmen“ einer Partei ist jede juristische Person, an der eine Partei direkt oder indirekt mehr als fünfzig Prozent (50 %) ihrer Anteile oder Stimmrechte hält. Jede juristische Person wird als Verbundenes Unternehmen betrachtet, solange diese Beteiligung aufrechterhalten wird.</p>
        <p>„Vertrag“ umfasst das Leistungsvereinbarung und dessen in Bezug genommene Anlagen.</p>
        <p>„Vertrauliche Informationen“ bedeutet ...</p>
      </section>

      <section>
        <h2>3. Vertragsgegenstand</h2>
        <p>Gegenstand des Vertrags ist die Bereitstellung der vom Kunden beauftragten und im Leistungsvereinbarung vereinbarten Services.</p>
      </section>

      <section>
        <h2>4. Leistungsumfang und Gewährleistung</h2>
        <p><strong>4.1 Leistungsumfang</strong><br/>
        Der konkrete Leistungs- und Funktionsumfang der Services sowie der Umfang der sonstigen vertraglichen Leistungen ergeben sich aus dem Leistungsvereinbarung inklusive seiner Anlagen. Etwaige Aussagen und Erläuterungen zu den Services in Werbematerialien, auf Unternehmens-Websites oder anderen Plattformen oder Kommunikationskanälen außerhalb der vorgenannten vertraglichen Unterlagen sind ausdrücklich nicht Vertragsbestandteil und stellen keine Leistungsbeschreibung, Garantie oder Zusicherung einer bestimmten Eigenschaft dar.</p>
        <p><strong>4.2 Gewährleistung</strong><br/>
        PrimEx sichert zu, dass es die Services gemäß den vertraglichen Abreden ...</p>
      </section>

      <section>
        <h2>5. Pflichten des Kunden</h2>
        <p>5.1 Nutzung nur für Vertragszweck ...</p>
        <p>5.2 Kundendaten ...</p>
        <p>5.3 Zugriff auf Kundendaten ...</p>
        <p>5.4 Sicherheit ...</p>
        <p>5.5 Überwachung von Nutzungsmetriken ...</p>
      </section>

      {/* Repeat <section> blocks for all remaining sections */}
      
    </div>
  );
};

export default Terms;


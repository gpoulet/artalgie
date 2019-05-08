import React, { memo } from "react";
import { ARTALGIE, LINK_MENTIONS_LEGALES } from '../../constants'

function LinkArtalgie() {
  return <a href="http://artalgie.fr" target="_blank"
            rel="noopener noreferrer">{ARTALGIE}.fr</a>
}

function MentionsLegales() {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{LINK_MENTIONS_LEGALES}</span>
            <h5>1. Présentation du site.</h5>
            <p>En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la confiance dans
              l’économie numérique, il est précisé aux utilisateurs du site <LinkArtalgie/> l’identité des
              différents intervenants dans le cadre de sa réalisation et de son suivi :</p>
            <p>
              <b>Propriétaire : </b> Nathalie Poulet-Guilbert – Smart SA SCIC à capital variable – 75 rue Léon
              Gambetta – 59000 LILLE
            </p>
            <p>
              <b>Créateur :</b> Nathalie Poulet-Guilbert – <a href="http://nathaliepoulet.com" target="_blank"
                                                              rel="noopener noreferrer">http://nathaliepoulet.com</a>
            </p>
            <p>
              <b>Responsable publication :</b> Nathalie Poulet-Guilbert – <a href="mailto:nathalie.poulet@free.fr"
                                                                             target="_blank"
                                                                             rel="noopener noreferrer">nathalie.poulet@free.fr</a>
              <br/>
              Le responsable publication est une personne physique ou une personne morale.
            </p>
            <p>
              <b>Webmaster :</b> Gauthier Poulet – <a href="mailto:contact@artalgie.fr" target="_blank"
                                                      rel="noopener noreferrer">contact@artalgie.fr</a>
            </p>
            <p>
              <b>Hébergeur :</b> OVH – 2 rue Kellermann BP 80157 – 59053 ROUBAIX – France
            </p>
            <p>
              <b>Crédits :</b><br/>
              - Créateur : Nathalie Poulet-Guilbert<br/>
              - Webmaster : Gauthier Poulet<br/>
              - Photographe : Claire Le Fourn<br/>
              - Le modèle des mentions légales ont été générées et offertes par Subdelirium<br/>
            </p>

            <h5>2. Conditions générales d’utilisation du site et des services proposés.</h5>
            <p>
              L’utilisation du site <LinkArtalgie/> implique l’acceptation pleine et entière des conditions
              générales d’utilisation ci-après décrites. Ces conditions d’utilisation sont susceptibles
              d’être modifiées ou complétées à tout moment, les utilisateurs du site <LinkArtalgie/> sont donc invités à
              les consulter de manière régulière.
            </p>
            <p>
              Ce site est normalement accessible à tout moment aux utilisateurs. Une interruption pour
              raison de maintenance technique peut être toutefois décidée par Nathalie Poulet-
              Guilbert, qui s’efforcera alors de communiquer préalablement aux utilisateurs les dates
              et heures de l’intervention.
            </p>
            <br/>
            <p>
              Le site <LinkArtalgie/> est mis à jour régulièrement par Nathalie Poulet-Guilbert. De la
              même façon, les mentions légales peuvent être modifiées à tout moment : elles
              s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible
              afin d’en prendre connaissance.
            </p>

            <h5>3. Description des services fournis.</h5>
            <p>
              Le site <LinkArtalgie/> a pour objet de fournir une information concernant l’ensemble des
              activités de la société.</p>
            <p>
              Nathalie Poulet-Guilbert s’efforce de fournir sur le site <LinkArtalgie/> des informations
              aussi précises que possible. Toutefois, il ne pourra être tenue responsable des
              omissions, des inexactitudes et des carences dans la mise à jour, qu’elles soient de son
              fait ou du fait des tiers partenaires qui lui fournissent ces informations.</p>
            <p>
              Tous les informations indiquées sur le site <LinkArtalgie/> sont données à titre indicatif,
              et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site
              <LinkArtalgie/> ne sont pas exhaustifs. Ils sont donnés sous réserve de modifications
              ayant été apportées depuis leur mise en ligne.
            </p>

            <h5>4. Limitations contractuelles sur les données techniques.</h5>
            <p>Le site utilise la technologie JavaScript.</p>
            <p>
              Le site Internet ne pourra être tenu responsable de dommages matériels liés à
              l’utilisation du site. De plus, l’utilisateur du site s’engage à accéder au site en utilisant un
              matériel récent, ne contenant pas de virus et avec un navigateur de dernière génération
              mis-à-jour.</p>
            <h5>5. Propriété intellectuelle et contrefaçons.</h5>
            <p>
              Nathalie Poulet-Guilbert est propriétaire des droits de propriété intellectuelle ou détient
              les droits d’usage sur tous les éléments accessibles sur le site, notamment les textes,
              images, graphismes, logo, icônes, sons, logiciels.</p>
            <p>
              Toute reproduction, représentation, modification, publication, adaptation de tout ou partie
              des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf
              autorisation écrite préalable de : Nathalie Poulet-Guilbert.</p>
            <p>
              Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il
              contient sera considérée comme constitutive d’une contrefaçon et poursuivie

              conformément aux dispositions des articles L.335-2 et suivants du Code de Propriété
              Intellectuelle.
            </p>

            <h5>6. Limitations de responsabilité.</h5>
            <p>
              Nathalie Poulet-Guilbert ne pourra être tenue responsable des dommages directs et
              indirects causés au matériel de l’utilisateur, lors de l’accès au site <LinkArtalgie/>, et
              résultant soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées
              au point 4, soit de l’apparition d’un bug ou d’une incompatibilité.</p>
            <p>
              Nathalie Poulet-Guilbert ne pourra également être tenue responsable des dommages
              indirects (tels par exemple qu’une perte de marché ou perte d’une chance) consécutifs à
              l’utilisation du site <LinkArtalgie/>.</p>
            <p>
              Des espaces interactifs (possibilité de poser des questions via l’espace contact) sont à la
              disposition des utilisateurs. Nathalie Poulet-Guilbert se réserve le droit de supprimer,
              sans mise en demeure préalable, tout contenu déposé dans cet espace qui
              contreviendrait à la législation applicable en France, en particulier aux dispositions
              relatives à la protection des données. Le cas échéant, Nathalie Poulet-Guilbert se
              réserve également la possibilité de mettre en cause la responsabilité civile et/ou pénale
              de l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant,
              ou pornographique, quel que soit le support utilisé (texte, photographie…).
            </p>

            <h5>7. Gestion des données personnelles.</h5>
            <p>
              En France, les données personnelles sont notamment protégées par la loi n° 78-87 du 6 janvier 1978, la loi
              n° 2004-801 du 6 août 2004, l’article L. 226-13 du Code pénal et la Directive Européenne du 24 octobre
              1995.
            </p>
            <p>
              A l’occasion de l’utilisation du site <LinkArtalgie/>, peuvent être recueillies : l’URL des liens par
              l’intermédiaire desquels l’utilisateur a accédé au site <LinkArtalgie/>, le fournisseur d’accès de
              l’utilisateur, l’adresse de protocole Internet (IP) de l’utilisateur.
              En tout état de cause Nathalie Poulet-Guilbert ne collecte des informations personnelles relatives à
              l’utilisateur que pour le besoin de certains services proposés par le site <LinkArtalgie/>. L’utilisateur
              fournit ces informations en toute connaissance de cause, notamment lorsqu’il procède par lui-même à leur
              saisie. Il est alors précisé à l’utilisateur du site <LinkArtalgie/> l’obligation ou non de fournir ces
              informations.
            </p>
            <p>
              Conformément aux dispositions des articles 38 et suivants de la loi 78-17 du 6 janvier 1978 relative à
              l’informatique, aux fichiers et aux libertés, tout utilisateur dispose d’un droit d’accès, de
              rectification et d’opposition aux données personnelles le concernant, en effectuant sa demande écrite et
              signée, accompagnée d’une copie du titre d’identité avec signature du titulaire de la pièce, en précisant
              l’adresse à laquelle la réponse doit être envoyée.
            </p>
            <p>
              Aucune information personnelle de l’utilisateur du site <LinkArtalgie/> n’est publiée à l’insu de
              l’utilisateur, échangée, transférée, cédée ou vendue sur un support quelconque à des tiers. Seule
              l’hypothèse du rachat de Nathalie Poulet-Guilbert et de ses droits permettrait la transmission des dites
              informations à l’éventuel acquéreur qui serait à son tour tenu de la même obligation de conservation et de
              modification des données vis-à-vis de l’utilisateur du site <LinkArtalgie/>.
            </p>
            <p>Le site n’est pas déclaré à la CNIL car il ne recueille pas d’informations personnelles.
              Les bases de données sont protégées par les dispositions de la loi du 1er juillet 1998 transposant la
              directive 96/9 du 11 mars 1996 relative à la protection juridique des bases de données.
            </p>

            <h5>8. Liens hypertextes et cookies.</h5>
            <p>Le site <LinkArtalgie/> contient un certain nombre de liens hypertextes vers d’autres sites, mis en place
              avec l’autorisation de Nathalie Poulet-Guilbert. Cependant, Nathalie Poulet-Guilbert n’a pas la
              possibilité de vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune
              responsabilité de ce fait.</p>
            <p>
              La navigation sur le site <LinkArtalgie/> est susceptible de provoquer l’installation de cookie(s) sur
              l’ordinateur de l’utilisateur. Un cookie est un fichier de petite taille, qui ne permet pas
              l’identification de l’utilisateur, mais qui enregistre des informations relatives à la navigation d’un
              ordinateur sur un site. Les données ainsi obtenues visent à faciliter la navigation ultérieure sur le
              site, et ont également vocation à permettre diverses mesures de fréquentation.
            </p>
            <p>
              Le refus d’installation d’un cookie peut entraîner l’impossibilité d’accéder à certains services.
              L’utilisateur peut toutefois configurer son ordinateur de la manière suivante, pour refuser l’installation
              des cookies :<br/>
              - Sous Internet Explorer : onglet outil (pictogramme en forme de rouage en haut à droite) / options
              internet. Cliquez sur Confidentialité et choisissez Bloquer tous les cookies. Validez sur Ok.<br/>
              - Sous Firefox : en haut de la fenêtre du navigateur, cliquez sur le bouton Firefox, puis aller dans
              l’onglet Options. Cliquer sur l’onglet Vie privée. Paramétrez les Règles de conservation sur : utiliser
              les paramètres personnalisés pour l’historique. Enfin décochez-la pour désactiver les cookies.<br/>
              - Sous Safari : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par un
              rouage).
              Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la section « Confidentialité »,
              cliquez sur Paramètres de contenu. Dans la section « Cookies », vous pouvez bloquer les cookies.<br/>
              - Sous Chrome : Cliquez en haut à droite du navigateur sur le pictogramme de menu (symbolisé par trois
              lignes horizontales). Sélectionnez Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la
              section « Confidentialité », cliquez sur Préférences. Dans l’onglet « Confidentialité », vous pouvez
              bloquer les cookies.
            </p>

            <h5>9. Droit applicable et attribution de juridiction.</h5>
            <p>
              Tout litige en relation avec l’utilisation du site <LinkArtalgie/> est soumis au droit français. Il est
              fait attribution exclusive de juridiction aux tribunaux compétents de Paris.
            </p>

            <h5>10. Les principales lois concernées.</h5>
            <p>Loi n° 78-17 du 6 janvier 1978, notamment modifiée par la loi n° 2004-801 du 6 août 2004 relative à
              l’informatique, aux fichiers et aux libertés.</p>
            <p>
              Loi n° 2004-575 du 21 juin 2004 pour la confiance dans l’économie numérique.
            </p>

            <h5>11. Lexique</h5>
            <p>Utilisateur : Internaute se connectant, utilisant le site susnommé.</p>
            <p>
              Informations personnelles : « les informations qui permettent, sous quelque forme que ce soit, directement
              ou non, l’identification des personnes physiques auxquelles elles s’appliquent » (article 4 de la loi n°
              78-17 du 6 janvier 1978).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(MentionsLegales);
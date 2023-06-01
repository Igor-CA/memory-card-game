import absoluteRadiance from '../images/Absolute_Radiance_Statue.png'
import brokenVessel from '../images/B_Broken_Vessel-2.png'
import broodingMawlek from '../images/B_Brooding_Mawlek2.png'
import crystalGuardian from '../images/B_Crystal_Guardian.png'
import dungDefender from '../images/B_Dung_Defender.png'
import falseKnight from '../images/B_False_Knight.png'
import flukemarm from '../images/B_Flukemarm.png'
import godTamer from '../images/B_God_Tamer.png'
import greatNailsageSly from '../images/B_Great_Nailsage_Sly.png'
import greyPrinceZote from '../images/B_Grey_Prince_Zote.png'
import grimm from '../images/B_Grimm.png'
import gruzMother from '../images/B_Gruz_Mother.png'
import hollowKnight from '../images/B_Hollow_Knight.png'
import mantisLords from '../images/B_Mantis_Lords-2.png'
import massiveMossCharger from '../images/B_Massive_Moss_Charger.png'
import nightmareKing from '../images/B_Nightmare_King.png'
import nosk from '../images/B_Nosk.png'
import oblobble from '../images/B_Oblobble.png'
import oroAndMato from '../images/B_Oro_&_Mato.png'
import paintmasterSheo from '../images/B_Paintmaster_Sheo.png'
import pureVessel from '../images/B_Pure_Vessel.png'
import radiance from '../images/B_Radiance.png'
import soulWarrior from '../images/B_Soul_Warrior.png'
import soulMaster from '../images/B_Soulmaster.png'
import theCollector from '../images/B_TheCollector.png'
import traitorLord from '../images/B_Traitor_Lord.png'
import Uumuu from '../images/B_Uumuu.png'
import vengeflyKing from '../images/B_Vengefly_King.png'
import watcherKnight from '../images/B_Watcher_Knight-2.png'
import whiteDefender from '../images/B_White_Defender.png'
import failedChampion from '../images/Failed-Champion.png'
import hiveKnight from '../images/Hive_knight.png'
import elderHu from '../images/HJ_Elder_Hu.png'
import galien from '../images/HJ_Galien.png'
import gorb from '../images/HJ_Gorb.png'
import markoth from '../images/HJ_Markoth.png'
import marmu from '../images/HJ_Marmu.png'
import noEyes from '../images/HJ_No_Eyes.png'
import xero from '../images/HJ_Xero.png'
import hunter from '../images/Hunter_Full_Body.png'
import lostKin from '../images/Lost-Kin.png'
import soulTyrant from '../images/Soul-Tyrant.png'
import tisoGod from '../images/Tiso_God.png'
import wingedNosk from '../images/Winged_Nosk.png'

import hornet from '../images/B_Hornet2.png';

import Card from './Card.jsx';

export default function CardsContainer({props}){

    const allCards = [
        {name: 'Absolute radiance', image: absoluteRadiance},
        {name: 'Broken vessel', image: brokenVessel},
        {name: 'Brooding mawlek', image: broodingMawlek},
        {name: 'Crystal guardi', image: crystalGuardian},
        {name: 'Dung defender', image: dungDefender},
        {name: 'False knight', image: falseKnight},
        {name: 'Flukemarm', image: flukemarm},
        {name: 'God tamer', image: godTamer},
        {name: 'Great nailsage Sly', image: greatNailsageSly},
        {name: 'Grey prince Zote', image: greyPrinceZote},
        {name: 'Grimm', image: grimm},
        {name: 'Gruz mother', image: gruzMother},
        {name: 'Hollow knight', image: hollowKnight},
        {name: 'Hornet', image: hornet},
        {name: 'Mantis Lords', image: mantisLords},
        {name: 'Massive moss charger', image: massiveMossCharger},
        {name: 'Nightmare king', image: nightmareKing},
        {name: 'Nosk', image: nosk},
        {name: 'Oblobble', image: oblobble},
        {name: 'Oro and Mato', image: oroAndMato},
        {name: 'Paintmaster Sheo', image: paintmasterSheo},
        {name: 'Pure vessel', image: pureVessel},
        {name: 'Radiance', image: radiance},
        {name: 'Soul warrior', image: soulWarrior},
        {name: 'Soul master', image: soulMaster},
        {name: 'The collector', image: theCollector},
        {name: 'Traitor lord', image: traitorLord},
        {name: 'Uumuu', image: Uumuu},
        {name: 'Vengefly king', image: vengeflyKing},
        {name: 'Watcher knight', image: watcherKnight},
        {name: 'White defender', image: whiteDefender},
        {name: 'Failed champion', image: failedChampion},
        {name: 'Hive knight', image: hiveKnight},
        {name: 'Elder hu', image: elderHu},
        {name: 'Galien', image: galien},
        {name: 'Gorb', image: gorb},
        {name: 'Markoth', image: markoth},
        {name: 'Marmu', image: marmu},
        {name: 'No eyes', image: noEyes},
        {name: 'Xero', image: xero},
        {name: 'Hunter', image: hunter},
        {name: 'Lost Kin', image: lostKin},
        {name: 'Soul tyrant', image: soulTyrant},
        {name: 'Tiso God', image: tisoGod},
        {name: 'winged nosk', image: wingedNosk},

    ]

    return(
        <div className="game-container">
            {allCards.map((card, index) => {
                return(
                    <Card image={card.image} title={card.name} key={index}></Card>
                )
            })}
        </div>
    )
}
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IrregularverbsService {

  private irregularVerbs: Map<string, string[]>;
  constructor() { 

    this.irregularVerbs = new Map<string, string[]>();
    this.initializeirregularVerbs();
  }

  private initializeirregularVerbs(): void {
    this.irregularVerbs.set('Meydana gelmek, çıkmak', ['Arise (ırayz)', 'Arose (ıroz)', 'Arisen (ırîz’ın)']);
this.irregularVerbs.set('Uyanmak, uykudan kalkmak', ['Awake (ıweyk)', 'Awoke (ıwo:k)', 'Awoken (ıwokın)']);
this.irregularVerbs.set('Olmak', ['Be (bi:)', 'Was/Were (waz / wör)', 'Been (bi:n)']);
this.irregularVerbs.set('Taşımak, kaldırmak', ['Bear (ber)', 'Bore (bor)', 'Borne/Born (bôrn)']);
this.irregularVerbs.set('Dövmek, vurmak', ['Beat (bit)', 'Beat (bit)', 'Beaten/bit’ın/']);
this.irregularVerbs.set('Olmak', ['Become (bîkam)', 'Became (bîkeym)', 'Become (bîkam)']);
this.irregularVerbs.set('Başlamak', ['Begin (bîgîn)', 'Began (bîgen)', 'Begun (bîgan)']);
this.irregularVerbs.set('Eğmek, bükmek, bükülmek', ['Bend (bend)', 'Bent (bent)', 'Bent (bent)']);
this.irregularVerbs.set('Bahse girmek', ['Bet (bet)', 'Bet (bet)', 'Bet (bet)']);
this.irregularVerbs.set('Bağlamak, sarmak', ['Bind (baynd)', 'Bound (baund)', 'Bound (baund)']);
this.irregularVerbs.set('Fiyat vermek, açık arttırmada fiyat arttırmak', ['Bid (bîd)', 'Bid (bîd)', 'Bid (bîd)']);
this.irregularVerbs.set('Isırmak', ['Bite (bayt)', 'Bit (bît)', 'Bitten (bît’ın)']);
this.irregularVerbs.set('Kanamak', ['Bleed (bli:d)', 'Bled (bled)', 'Bled (beld)']);
this.irregularVerbs.set('Esmek, üflemek', ['Blow (blov)', 'Blew (blu)', 'Blown (blohn)']);
this.irregularVerbs.set('Kırmak', ['Break (breyk)', 'Broke (brok)', 'Broken (bro’kın)']);
this.irregularVerbs.set('Üremek', ['Breed (brid)', 'Bred (bred)', 'Bred (bred)']);
this.irregularVerbs.set('Getirmek', ['Bring (brîng)', 'Brought (brôt)', 'Brought (brôt)']);
this.irregularVerbs.set('Radyo/televizyonda yayımlamak', ['Broadcast (brôd’käst)', 'Broadcast (brôd’käst)', 'Broadcast (brôd’käst)']);
this.irregularVerbs.set('Yapmak, inşa etmek', ['Build (bîld)', 'Built (bîlt)', 'Built (bîlt)']);
this.irregularVerbs.set('Yanmak, yakmak', ['Burn (börn)', 'Burnt/Burned (börnt / börnd)', 'Burnt/Burned (börnt / börnd)']);
this.irregularVerbs.set('Patlamak', ['Burst (börst)', 'Burst (börst)', 'Burst (börst)']);
this.irregularVerbs.set('Satın almak', ['Buy (bay)', 'Bought (bôt)', 'Bought (bôt)']);
this.irregularVerbs.set('Atmak, fırlatmak', ['Cast (käst)', 'Cast (käst)', 'Cast (käst)']);
this.irregularVerbs.set('Yakalamak', ['Catch (käç)', 'Caught (kôt)', 'Caught (kôt)']);
this.irregularVerbs.set('Gelmek', ['Come (kam)', 'Came (kaym)', 'Come (kam)']);
this.irregularVerbs.set('Malolmak, (maliyeti olmak anlamında)', ['Cost (kôst)', 'Cost (kôst)', 'Cost (kôst)']);
this.irregularVerbs.set('Kesmek', ['Cut (kat)', 'Cut (kat)', 'Cut (kat)']);
this.irregularVerbs.set('Seçmek', ['Choose (çu:z)', 'Chose (ço:z)', 'Chosen (ço’zın)']);
this.irregularVerbs.set('Yapışmak, sarılmak', ['Cling (klîng)', 'Clung (klang)', 'Clung (klang)']);
this.irregularVerbs.set('Sürünmek, emeklemek', ['Creep (krip)', 'Crept (krept)', 'Crept (krept)']);
this.irregularVerbs.set('İlgilenmek, işiyle uğraşmak', ['Deal (diıl)', 'Dealt (delt)', 'Dealt (delt)']);
this.irregularVerbs.set('Kazmak, bellemek', ['Dig (dig)', 'Dug (dag)', 'Dug (dag)']);
this.irregularVerbs.set('Yapmak', ['Do (du)', 'Did (dîd)', 'Done (dan)']);
this.irregularVerbs.set('Çizmek, Sürüklemek', ['Draw (drô)', 'Drew (dru)', 'Drawn (drôn)']);
this.irregularVerbs.set('Rüya görmek', ['Dream (drim)', 'Dreamt/Dreamed (drempt/drimd)', 'Dreamt/Dreamed (drempt/drimd)']);
this.irregularVerbs.set('İçmek', ['Drink (drîngk)', 'Drank (drenk)', 'Drunk (drank)']);
this.irregularVerbs.set('Araç sürmek', ['Drive (drayv)', 'Drove (drov)', 'Driven (driv’ın)']);
this.irregularVerbs.set('Yemek', ['Eat (i:t)', 'Ate (eyt)', 'Eaten (i:ıtın)']);
this.irregularVerbs.set('Düşmek', ['Fall (fôl)', 'Fell (fel)', 'Fallen (fôlın)']);
this.irregularVerbs.set('Beslemek, besin vermek', ['Feed (fid)', 'Fed (fed)', 'Fed (fed)']);
this.irregularVerbs.set('Hissetmek', ['Feel (fiil)', 'Felt (felt)', 'Felt (felt)']);
this.irregularVerbs.set('Dövüşmek, kavga etmek', ['Fight (fayt)', 'Fought (fôt)', 'Fought (fôt)']);
this.irregularVerbs.set('Bulmak', ['Find (faynd)', 'Found (faund)', 'Found (faund)']);
this.irregularVerbs.set('Kaçmak, uçup gitmek', ['Flee (flii)', 'Fled (feld)', 'Fled/feld (feld)']);
this.irregularVerbs.set('Uçmak', ['Fly (flay)', 'Flew (flu:)', 'Flown (flon)']);
this.irregularVerbs.set('Yasaklamak', ['Forbid (fırbîd)', 'Forbade (fırbeyd)', 'Forbidden (fi’bidın)']);
this.irregularVerbs.set('Unutmak', ['Forget (fırget)', 'Forgot (fırgat)', 'Forgotten (fırgatten)']);
this.irregularVerbs.set('Affetmek, bağışlamak', ['Forgive (fırgiv)', 'Forgave (fırgeyv)', 'Forgiven (fırgivın)']);
this.irregularVerbs.set('Donmak, Dondurmak', ['Freeze (fri:z)', 'Froze (froz)', 'Frozen (frozen)']);
this.irregularVerbs.set('Almak, sahip olmak', ['Get (get)', 'Got (gat)', 'Got/Gotten (gat)']);
this.irregularVerbs.set('Vermek', ['Give (giv)', 'Gave (geyv)', 'Given (gîv’ın)']);
this.irregularVerbs.set('Gitmek', ['Go (go)', 'Went (went)', 'Gone (gan)']);
this.irregularVerbs.set('Büyümek, büyütmek, yetiştirmek', ['Grow (groo)', 'Grew (gruu)', 'Grown (groon)']);
this.irregularVerbs.set('Öğütmek', ['Grind (grind)', 'Ground (graund)', 'Ground (graund)']);
this.irregularVerbs.set('Asmak', ['Hang (häng)', 'Hung (hang)', 'Hung (hang)']);
this.irregularVerbs.set('Sahip olmak', ['Have (häv)', 'Had (häd)', 'Had (häd)']);
this.irregularVerbs.set('Duymak, işitmek', ['Hear (hiır)', 'Heard (hörd)', 'Heard (hörd)']);
this.irregularVerbs.set('Saklamak, saklanmak', ['Hide (hayd)', 'Hid (hid)', 'Hidden (hidn)']);
this.irregularVerbs.set('Vurmak, çarpmak', ['Hit (hit)', 'Hit (hit)', 'Hit (hit)']);
this.irregularVerbs.set('Tutmak, kaldırmak', ['Hold (hold)', 'Held (held)', 'Held (held)']);
this.irregularVerbs.set('İncitmek, acıtmak, ağrımak', ['Hurt (hört)', 'Hurt (hört)', 'Hurt (hört)']);
this.irregularVerbs.set('Tutmak, korumak', ['Keep (kiip)', 'Kept (kept)', 'Kept (kept)']);
this.irregularVerbs.set('Bilmek', ['Know (noo)', 'Knew (nuu)', 'Known (novn)']);
this.irregularVerbs.set('Diz çökmek', ['Kneel (niil)', 'Knelt (nelt)', 'Knelt (nelt)']);
this.irregularVerbs.set('Örmek, örgü örmek, dokumak', ['Knit (nît)', 'Knit (nît)', 'Knit (nît)']);
this.irregularVerbs.set('Yatırmak, sermek', ['Lay (ley)', 'Laid (leyd)', 'Laid (leyd)']);
this.irregularVerbs.set('Yol açmak, önderlik etmek', ['Lead (liid)', 'Led (led)', 'Led (led)']);
this.irregularVerbs.set('Yaslanmak, eğilmek', ['Lean (liin)', 'Leant (liint)', 'Leant (liint)']);
this.irregularVerbs.set('Zıplamak, hoplamak', ['Leap (liip)', 'Leapt (liipt)', 'Leapt (liipt)']);
this.irregularVerbs.set('Öğrenmek', ['Learn (lörn)', 'Learnt/Learned (lörnt)']);
this.irregularVerbs.set('Ayrılmak, bırakmak, terketmek', ['Leave (liiv)', 'Left (left)', 'Left (left)']);
this.irregularVerbs.set('Ödünç vermek, borç vermek', ['Lend (lend)', 'Lent (lent)', 'Lent (lent)']);
this.irregularVerbs.set('İzin vermek', ['Let (let)', 'Let (let)', 'Let (let)']);
this.irregularVerbs.set('Uzanmak, uzanıp yatmak', ['Lie (lay)', 'Lay (ley)', 'Lain (leyn)']);
this.irregularVerbs.set('Işık yakmak, ateş yakmak', ['Light (layt)', 'Lit (lit)', 'Lit (lit)']);
this.irregularVerbs.set('Kaybetmek, yitirmek', ['Lose (luuz)', 'Lost (lost)', 'Lost (lost)']);
this.irregularVerbs.set('Yapmak', ['Make (meyk)', 'Made (meyd)', 'Made (meyd)']);
this.irregularVerbs.set('Anlamına gelmek, demek istemek', ['Mean (miin)', 'Meant (ment)', 'Meant (ment)']);
this.irregularVerbs.set('Tanışmak, karşılaşmak, rast gelmek', ['Meet (miit)', 'Met (met)', 'Met (met)']);
this.irregularVerbs.set('Yanılmak', ['Mistake (mîsteyk)', 'Mistook (mîstuuk)', 'Mistaken (mîsteyk’ın)']);
this.irregularVerbs.set('Üstesinden gelmek, yenmek', ['Overcome (ovırkam)', 'Overcame (overcame)', 'Overcome (ovırkam)']);
this.irregularVerbs.set('Ödemek', ['Pay (pey)', 'Paid (peyd)', 'Paid (peyd)']);
this.irregularVerbs.set('Koymak', ['Put (put)', 'Put (put)', 'Put (put)']);
this.irregularVerbs.set('Okumak', ['Read (riid)', 'Read (red)', 'Read (red)']);
this.irregularVerbs.set('Binmek, (ata, bisiklete, motora binmek vs..)', ['Ride (rayd)', 'Rode/rood (rood)', 'Ridden (ridn)']);
this.irregularVerbs.set('Zil çalmak', ['Ring (ring)', 'Rang (reng)', 'Rung (rang)']);
this.irregularVerbs.set('Yükselmek, ayağa kalkmak (güneş, ay doğmak)', ['Rise (rayz)', 'Rose (rooz)', 'Risen (rayzn)']);
this.irregularVerbs.set('Koşmak', ['Run (ran)', 'Ran (rän)', 'Run (ran)']);
this.irregularVerbs.set('Söylemek', ['Say (sey)', 'Said (sed)', 'Said (sed)']);
this.irregularVerbs.set('Görmek', ['See (sii)', 'Saw (soo)', 'Seen (siin)']);
this.irregularVerbs.set('Satmak', ['Sell (sel)', 'Sold (sold)', 'Sold (sold)']);
this.irregularVerbs.set('Göndermek', ['Send (send)', 'Sent (sent)', 'Sent (sent)']);
this.irregularVerbs.set('Koymak, kurmak, ayarlamak', ['Set (set)', 'Set (set)', 'Set (set)']);
this.irregularVerbs.set('Dikmek (dikiş dikmek anlamında)', ['Sew (so)', 'Sewed (süüd)', 'Sewed/Sewn (süüd/son)']);
this.irregularVerbs.set('Sallamak, sallanmak', ['Shake (şeyk)', 'Shook (şuuk)', 'Shaken (şeykın)']);
this.irregularVerbs.set('Parlamak', ['Shine (şayn)', 'Shone (şoon)', 'Shone (şoon)']);
this.irregularVerbs.set('Ateş etmek, vurmak (silah vb.)', ['Shoot (şuut)', 'Shot (şat)', 'Shot (şat)']);
this.irregularVerbs.set('Göstermek', ['Show (şoo)', 'Showed (şood)', 'Shown (şoon)']);
this.irregularVerbs.set('Daralmak, küçülmek', ['Shrink (şrink)', 'Shrank (şränk)', 'Shrunk (şrank)']);
this.irregularVerbs.set('Kapatmak, kapanmak', ['Shut (şat)', 'Shut (şat)', 'Shut (şat)']);
this.irregularVerbs.set('Batmak (suda batmak vb.)', ['Sink (sing)', 'Sank (seng)', 'Sunk (sang)']);
this.irregularVerbs.set('Oturmak', ['Sit (sit)', 'Sat (set)', 'Sat (set)']);
this.irregularVerbs.set('Uyumak', ['Sleep (sliip)', 'Slept (slept)', 'Slept (slept)']);
this.irregularVerbs.set('Kaymak, kaydırmak', ['Slide (slayd)', 'Slid (slid)', 'Slid (slid)']);
this.irregularVerbs.set('Kokmak, koklamak', ['Smell (smel)', 'Smelt (smelt)', 'Smelt (smelt)']);
this.irregularVerbs.set('Konuşmak', ['Speak (spiik)', 'Spoke (spook)', 'Spoken (spokın)']);
this.irregularVerbs.set('Çabuk gitmek, hızla/süratle gitmek', ['Speed (spiid)', 'Sped (sped)', 'Sped (sped)']);
this.irregularVerbs.set('Hecelemek, harfleri kodlamak', ['Spell (spel)', 'Spelt (spelt)', 'Spelt (spelt)']);
this.irregularVerbs.set('Harcamak, sarf etmek', ['Spend (spend)', 'Spent (spent)', 'Spent (spent)']);
this.irregularVerbs.set('Kazayla dökmek (sıvı vb...)', ['Spill (spil)', 'Spilt/Spilled (spilt/spilt)']);
this.irregularVerbs.set('Dönmek, Döndürmek (tekerlek, topaç vb...)', ['Spin (spîn)', 'Spun (span)', 'Spun (span)']);
this.irregularVerbs.set('Şişlemek, şişle öldürmek', ['Spit (spît)', 'Spat/spät (spat/spät)', 'Spat/spät (spat/spät)']);
this.irregularVerbs.set('Kırmak, yarmak, ayırmak, ayrılmak', ['Split (splît)', 'Split (splît)', 'Split (splît)']);
this.irregularVerbs.set('Bozmak, bozulmak (yiyecek, ahlak vs.)', ['Spoil (spoyl)', 'Spoilt/spoiled (spoilt/spoilt)']);
this.irregularVerbs.set('Saçmak, yaymak, dağıtmak', ['Spread (spriid)', 'Spread (spred)', 'Spread (spred)']);
this.irregularVerbs.set('Zıplamak, sıçramak', ['Spring (sprîng)', 'Sprang (spräng)', 'Sprung (sprang)']);
this.irregularVerbs.set('Ayakta durmak, katlanmak', ['Stand (ständ)', 'Stood (stuud)', 'Stood (stuud)']);
this.irregularVerbs.set('Çalmak, aşırmak (hırsızlık vb...)', ['Steal (stiil)', 'Stole (stool)', 'Stolen (stoln)']);
this.irregularVerbs.set('Yapışmak, yapıştırmak, saplanıp kalmak', ['Stick (stik)', 'Stuck (stak)', 'Stuck (stak)']);
this.irregularVerbs.set('Iğne Batması, böcek/arı sokması', ['Sting (stîng)', 'Stung (stang)', 'Stung (stang)']);
this.irregularVerbs.set('Kötü kokmak, kokuşmak, kötü olmak', ['Stink (stink)', 'Stank/Stunk (stänk)', 'Stunk (stank)']);
this.irregularVerbs.set('Uzun adımlarla yürümek', ['Stride (strayd)', 'Strode (strood)', 'Stridden (stridn)']);
this.irregularVerbs.set('Çarpmak, vurmak', ['Strike (strayk)', 'Struck (strak)', 'Struck (strak)']);
this.irregularVerbs.set('Küfür etmek, yemin etmek', ['Swear (sweır)', 'Swore (swoor)', 'Sworn (sworn)']);
this.irregularVerbs.set('Terlemek', ['Sweat (swet)', 'Sweat (swet)', 'Sweat (swet)']);
this.irregularVerbs.set('Süpürmek', ['Sweep (swiip)', 'Swept (swept)', 'Swept (swept)']);
this.irregularVerbs.set('Şişmek, kabarmak, şişirmek', ['Swell (swel)', 'Swelled (swelt)', 'Swollen (swo’lın)']);
this.irregularVerbs.set('Yüzmek', ['Swim (swim)', 'Swam (swäm)', 'Swum (swam)']);
this.irregularVerbs.set('Sallanmak, sallamak (salıncak vb.)', ['Swing (swing)', 'Swung (swang)', 'Swung (swang)']);
this.irregularVerbs.set('Almak', ['Take (teyk)', 'Took (tuuk)', 'Taken (teykn)']);
this.irregularVerbs.set('Öğretmek', ['Teach (tiiç)', 'Taught (taut)', 'Taught (taut)']);
this.irregularVerbs.set('Yırtmak, parçalamak', ['Tear (tiır)', 'Tore (toor)', 'Torn (torn)']);
this.irregularVerbs.set('Söylemek, demek', ['Tell (tel)', 'Told (told)', 'Told (told)']);
this.irregularVerbs.set('Düşünmek, sanmak', ['Think (thîngk)', 'Thought (thôt)', 'Thought (thôt)']);
this.irregularVerbs.set('Atmak, fırlatmak', ['Throw (throo)', 'Threw (thru)', 'Thrown (thron)']);
this.irregularVerbs.set('İtmek, yüklenmek', ['Thrust (tırast)', 'Thrust (tırast)', 'Thrust (tırast)']);
this.irregularVerbs.set('Yürümek, ayakla çiğnemek, ezmek', ['Thread (triid)', 'Trod (trad)', 'Trodden (tradn)']);
this.irregularVerbs.set('Anlamak', ['Understand (andırständ)', 'Understood (andırstuud)', 'Understood (andırstuud)']);
this.irregularVerbs.set('Sıkıntı çekmek, ....e maruz kalmak', ['Undergo (andırgo)', 'Underwent (andırwent)', 'Undergone (andırgan)']);
this.irregularVerbs.set('Üzerine almak, üstlenmek', ['Undertake (andırteyk)', 'Undertook (andırtuuk)', 'Undertaken (andırteyk’ın)']);
this.irregularVerbs.set('Uyandırmak, uyanmak', ['Wake (weyk)', 'Woke (wook)', 'Woken (wo’kın)']);
this.irregularVerbs.set('Giymek', ['Wear (weır)', 'Wore (woor)', 'Worn (worn)']);
this.irregularVerbs.set('Dokumak, örmek', ['Weave (wiv)', 'Wove (wov)', 'Woven (wo’vın)']);
this.irregularVerbs.set('Islatmak, ıslanmak', ['Wet (wet)', 'Wet (wet)', 'Wet (wet)']);
this.irregularVerbs.set('Kazanmak', ['Win (win)', 'Won (won)', 'Won (won)']);
this.irregularVerbs.set('Sarmak, sarılmak (ip, makara, bant...)', ['Wind (waynd)', 'Wound (waund)', 'Wound (waund)']);
this.irregularVerbs.set('Geri çekmek, para çekmek', ['Withdraw (wîdh.drô)', 'Withdrew (wîdh.dru)', 'Withdrawn (wîdh.drôn)']);
this.irregularVerbs.set('Burarak sıkmak, burkmak', ['Wring (ring)', 'Wrung (rang)', 'Wrung (rang)']);
this.irregularVerbs.set('Yazmak', ['Write (rayt)', 'Wrote (root)', 'Written (ritn)']);

  }

  private getRandomWord(): string {
    const words = Array.from(this.irregularVerbs.keys());
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  getAllIrregularVerbsForRandomWord(): { word: string, irregularVerb: string[] } {
    const randomWord = this.getRandomWord();
    const irregularVerb = this.irregularVerbs.get(randomWord) || [];
    return { word: randomWord, irregularVerb: irregularVerb };
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SynonymsService {

  private synonymsMap: Map<string, string[]>;
  constructor() { 

    this.synonymsMap = new Map<string, string[]>();
    this.initializeSynonyms();
  }
  private initializeSynonyms(): void {
this.synonymsMap.set('Amazing (İnanılmaz-İmkansız)', ['Incredible', 'Unbelievable', 'Improbable', 'Astonishing']);
this.synonymsMap.set('Anger (Öfke-Kızdırmak)', ['Enrage', 'Infuriate', 'Arouse', 'Nettle']);
this.synonymsMap.set('Angry (Öfkeli-Kızgın)', ['Wrathful', 'Furious', 'Enraged', 'Indignant']);
this.synonymsMap.set('Answer (Yanıtla-Cevapla)', ['Reply', 'Respond', 'Retort', 'Acknowledge']);
this.synonymsMap.set('Ask (Sor-Sorgu)', ['Question', 'Inquire', 'Query', 'Interrogate']);
this.synonymsMap.set('Awful (Berbat-Korkunç)', ['Dreadful', 'Terrible', 'Abominable', 'Unpleasant']);
this.synonymsMap.set('Bad (Kötü-Ahlaksız)', ['Depraved', 'Rotten', 'Contaminated', 'Sinful']);
this.synonymsMap.set('Beautiful (Güzel-Görkemli)', ['Gorgeous', 'Dazzling', 'Splendid', 'Magnificent']);
this.synonymsMap.set('Begin (Başla-Başlat)', ['Start', 'Open', 'Launch', 'Initiate']);
this.synonymsMap.set('Big (Büyük-Kocaman)', ['Enormous', 'Huge', 'Immense', 'Gigantic']);
this.synonymsMap.set('Brave (Cesur-Korkusuz)', ['Courageous', 'Fearless', 'Dauntless', 'Intrepid']);
this.synonymsMap.set('Break (Kırılma-Çarpışma)', ['Fracture', 'Wreck', 'Crash', 'Demolish']);
this.synonymsMap.set('Bright (Parlak-Parıltılı)', ['Sparkling', 'Shimmering', 'Radiant', 'Vivid']);
this.synonymsMap.set('Calm (Sakin-Huzurlu)', ['Quiet', 'Peaceful', 'Unruffled', 'Tranquil']);
this.synonymsMap.set('Come (Gel-Yaklaş)', ['Approach', 'Advance', 'Near', 'Arrive']);
this.synonymsMap.set('Cool (Serin-Soğuk)', ['Chilly', 'Cold', 'Frosty', 'Frigid']);
this.synonymsMap.set('Crooked (Eğri-Bükülmüş)', ['Bent', 'Twisted', 'Zigzag', 'Hooked']);
this.synonymsMap.set('Cry (Ağla)', ['Weep', 'Wail', 'Sob', 'Bawl']);
this.synonymsMap.set('Cut (Kes-Böl)', ['Slice', 'Carve', 'Cleave', 'Slit']);
this.synonymsMap.set('Dangerous (Tehlikeli-Riskli)', ['Perilous', 'Hazardous', 'Risky', 'Uncertain']);
this.synonymsMap.set('Dark (Karanlık-Kasvetli)', ['Shadowy', 'Unlit', 'Murky', 'Gloomy']);
this.synonymsMap.set('Decide (Karar ver-Seç)', ['Determine', 'Settle', 'Choose', 'Resolve']);
this.synonymsMap.set('Definite (Kesin-Olumlu)', ['Certain', 'Sure', 'Positive', 'Determined']);
this.synonymsMap.set('Delicious (Lezzetli-Nefis)', ['Savory', 'Delectable', 'Appetizing', 'Luscious']);
this.synonymsMap.set('Describe (Tanımla)', ['Portray', 'Characterize', 'Picture', 'Narrate']);
this.synonymsMap.set('Destroy (Yok et-Katlet)', ['Ruin', 'Demolish', 'Raze', 'Slay']);
this.synonymsMap.set('Difference (Farklılık-Anlaşmazlık)', ['Disagreement', 'Inequity', 'Contrast', 'Dissimilarity']);
this.synonymsMap.set('Do (Yap-Uygula)', ['Execute', 'Enact', 'Carry Out', 'Finish']);
this.synonymsMap.set('Dull (Sıkıcı-Cansız)', ['Unimaginative', 'Lifeless', 'Tedious', 'Tiresome']);
this.synonymsMap.set('Eager (Hevesli-İlgili)', ['Keen', 'Fervent', 'Enthusiastic', 'Involved']);
this.synonymsMap.set('End (Bitir-Sonlandır)', ['Stop', 'Finish', 'Terminate', 'Conclude']);
this.synonymsMap.set('Enjoy (Tadını çıkar-Memnun Ol)', ['Appreciate', 'Delight In', 'Be Pleased', 'Indulge In']);
this.synonymsMap.set('Explain (Açıkla-Tanımla)', ['Elaborate', 'Clarify', 'Define', 'Interpret']);
this.synonymsMap.set('Fair (Adil-Tarafsız)', ['Just', 'Impartial', 'Unbiased', 'Objective']);
this.synonymsMap.set('Fall (Düşme-Devrilme)', ['Drop', 'Descend', 'Plunge', 'Topple']);
this.synonymsMap.set('False (Yanlış-Sahte)', ['Fake', 'Fraudulent', 'Counterfeit', 'Spurious']);
this.synonymsMap.set('Fast (Hızlı-Aceleci)', ['Quick', 'Rapid', 'Hasty', 'Swiftly']);
this.synonymsMap.set('Fat (Şişman-Tombul)', ['Stout', 'Corpulent', 'Paunchy', 'Plump']);
this.synonymsMap.set('Fear (Korku-Dehşet)', ['Fright', 'Dread', 'Terror', 'Alarm']);
this.synonymsMap.set('Fly (Uç-Yüksel)', ['Soar', 'Hover', 'Flit', 'Wing']);
this.synonymsMap.set('Funny (Komik-Gülünç)', ['Humorous', 'Amusing', 'Droll', 'Laughable']);
this.synonymsMap.set('Get (Al-Tedarik et)', ['Acquire', 'Obtain', 'Secure', 'Procure']);
this.synonymsMap.set('Go (Git-Kaybol)', ['Recede', 'Depart', 'Fade', 'Disappear']);
this.synonymsMap.set('Good (İyi-Uygun)', ['Excellent', 'Apt', 'Marvelous', 'Qualified']);
this.synonymsMap.set('Great (Harika-Olağan üstü)', ['Noteworthy', 'Worthy', 'Distinguished', 'Remarkable']);
this.synonymsMap.set('Gross (Bürüt-Kaba)', ['Improper', 'Rude', 'Coarse', 'Indecent']);
this.synonymsMap.set('Happy (Mutlu-Memnun)', ['Pleased', 'Contented', 'Satisfied', 'Delighted']);
this.synonymsMap.set('Hate (Nefret)', ['Despise', 'Loathe', 'Detest', 'Abhor']);
this.synonymsMap.set('Have (Sahip ol-Kazan)', ['Acquire', 'Gain', 'Maintain', 'Believe']);
this.synonymsMap.set('Help (Yardım-Teşvik)', ['Aid', 'Assist', 'Succor', 'Encourage']);
this.synonymsMap.set('Hide (Gizle-Kamuflaj)', ['Conceal', 'Camouflage', 'Shroud', 'Veil']);
this.synonymsMap.set('Hurry (Acele et-Hızlandır)', ['Hasten', 'Urge', 'Accelerate', 'Bustle']);
this.synonymsMap.set('Hurt (Acı-Sıkıntı)', ['Damage', 'Distress', 'Afflict', 'Pain']);
this.synonymsMap.set('Idea (Fikir-Kavram)', ['Thought', 'Concept', 'Conception', 'Notion']);
this.synonymsMap.set('Important (Önemli-Kritik)', ['Necessary', 'Vital', 'Critical', 'Indispensable']);
this.synonymsMap.set('Interesting (İlginç-Büyüleyici)', ['Fascinating', 'Bright', 'Intelligent', 'Animated']);
this.synonymsMap.set('Keep (Tut-Sürdür)', ['Hold', 'Maintain', 'Sustain', 'Support']);
this.synonymsMap.set('Kill (Öldür-İdam et)', ['Slay', 'Execute', 'Assassinate', 'Abolish']);
this.synonymsMap.set('Lazy (Tembel-Boşta)', ['Indolent', 'Slothful', 'Idle', 'Inactive']);
this.synonymsMap.set('Little (Küçük-Minyatür)', ['Dinky', 'Puny', 'Diminutive', 'Miniature']);
this.synonymsMap.set('Look (Bak-İncele)', ['Scrutinize', 'Inspect', 'Survey', 'Study']);
this.synonymsMap.set('Love (Sevmek-Beğenmek)', ['Like', 'Admire', 'Esteem', 'Fancy']);
this.synonymsMap.set('Make (Yap-Üret)', ['Design', 'Fabricate', 'Manufacture', 'Produce']);
this.synonymsMap.set('Mark (İşaret-Künye)', ['Impress', 'Effect', 'Trace', 'Imprint']);
this.synonymsMap.set('Mischievous (Yaramaz-Şakacı)', ['Prankish', 'Waggish', 'Impish', 'Sportive']);
this.synonymsMap.set('Move (Hareket et-Git)', ['Plod', 'Go', 'Creep', 'Crawl']);
this.synonymsMap.set('Neat (Düzgün-Şık)', ['Trim', 'Dapper', 'Natty', 'Smart']);
this.synonymsMap.set('New (Yeni-Güncel)', ['Novel', 'Modern', 'Current', 'Recent']);
this.synonymsMap.set('Old (Eski-Harap)', ['Aged', 'Used', 'Worn', 'Dilapidated']);
this.synonymsMap.set('Part', ['Portion', 'Section', 'Fraction', 'Fragment']);
this.synonymsMap.set('Place (Parça-Bölüm)', ['Space', 'Area', 'Spot', 'Plot']);
this.synonymsMap.set('Plan (Plan-Konum)', ['Region', 'Location', 'Situation', 'Position']);
this.synonymsMap.set('Predicament (Çıkmaz-İkilem)', ['Quandary', 'Dilemma', 'Plight', 'Spot']);
this.synonymsMap.set('Put (Koy-Ata)', ['Place', 'Assign', 'Keep', 'Establish']);
this.synonymsMap.set('Quiet (Sessiz-Sakin)', ['Tranquil', 'Peaceful', 'Calm', 'Restful']);
this.synonymsMap.set('Right (Doğru-Gerçek)', ['Correct', 'Accurate', 'Factual', 'True']);
this.synonymsMap.set('Run (Koş-Yarış)', ['Race', 'Sprint', 'Dash', 'Rush']);
this.synonymsMap.set('Say/Tell (Söyle-Anlat)', ['Recount', 'Narrate', 'Explain', 'Reveal']);
this.synonymsMap.set('Scared (Korkmuş-Paniklemiş)', ['Panicked', 'Fearful', 'Unnerved', 'Insecure']);
this.synonymsMap.set('Show (Göster-Sunum)', ['Display', 'Exhibit', 'Present', 'Note']);
this.synonymsMap.set('Slow (Yavaş-Telaşsız)', ['Unhurried', 'Behind', 'Tedious', 'Slack']);
this.synonymsMap.set('Stop (Dur-Durakla)', ['Cease', 'Halt', 'Stay', 'Pause']);
this.synonymsMap.set('Story (Hikaye-Masal)', ['Tale', 'Yarn', 'Account', 'Narrative']);
this.synonymsMap.set('Strange (Garip-Tuhaf)', ['Odd', 'Peculiar', 'Unusual', 'Unfamiliar']);
this.synonymsMap.set('Take (Al-Kavrama)', ['Hold', 'Catch', 'Seize', 'Grasp']);
this.synonymsMap.set('Tell (Söyle-Açıkla)', ['Disclose', 'Reveal', 'Show', 'Expose']);
this.synonymsMap.set('Think (Düşün)', ['Consider', 'Contemplate', 'Reflect', 'Mediate']);
this.synonymsMap.set('Trouble (Sorun-Sıkıntı)', ['Distress', 'Anguish', 'Anxiety', 'Wretchedness']);
this.synonymsMap.set('True (Doğru-Uygun)', ['Accurate', 'Right', 'Proper', 'Precise']);
this.synonymsMap.set('Ugly (Çirkin-Korkunç)', ['Horrible', 'Unpleasant', 'Monstrous', 'Terrifying']);


    
  }
  private getRandomWord(): string {
    const words = Array.from(this.synonymsMap.keys());
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  getAllSynonymsForRandomWord(): { word: string, synonyms: string[] } {
    const randomWord = this.getRandomWord();
    const synonyms = this.synonymsMap.get(randomWord) || [];
    return { word: randomWord, synonyms: synonyms };
  }
}

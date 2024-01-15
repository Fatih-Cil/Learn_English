import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription, interval, map, of, take, zip } from 'rxjs';
import { SynonymsService } from '../services/synonyms.service';
import { IrregularverbsService } from '../services/irregularverbs.service';
import { PhrasalverbsService } from '../services/phrasalverbs.service';

@Component({
  selector: 'app-english-turkish',
  templateUrl: './english-turkish.component.html',
  styleUrls: ['./english-turkish.component.css']
})
export class EnglishTurkishComponent implements OnInit {

  @ViewChild('userInputField', { static: false }) userInputField!: ElementRef;
@ViewChild('userInputEnField', { static: false }) userInputEnField!: ElementRef;
  verbDictionary = new Map();
  verbDictionary2 = new Map();
  
  randomKey:any;
  randomKey2:any;
  turkishEquivalent:any;
  turkishEquivalent2:any;
  autorandomKey:any="English";
  autoturkishEquivalent:any="Türkçe";
  selectedWaitTime: number = 5;
  private intervalSubscription: Subscription | undefined;
  userInput: string = ''; // Kullanıcının girdiği Türkçe kelime
  userInputEn: string = ''; // Kullanıcının girdiği İngilizce kelime
  isTranslationCorrect: boolean = false; // Türkçe kelimenin doğruluğu
  isTranslationCorrect2: boolean = false; // İngilizce kelimenin doğruluğu
 
  randomWord!: { word: string, synonyms: string[] };
  randomIrregularVerbWord!: { word: string, irregularVerb: string[] };
  randomPhrasalVerbWord!: { word: string, phrasalVerb: string};
 
 
   constructor(
    private synonymsService:SynonymsService, 
    private irregularVerbsService:IrregularverbsService,
    private phrasalVerbsService:PhrasalverbsService
    
    ) {
    
     
   }

   ngAfterViewInit() {
    // Artık this.userInputField kullanılabilir
    this.get2();
    this.get();
    
  }

 
   ngOnInit(): void {
     
     this.load();
     this.load2();
     
     
     this.getIrregularVerbWord();
     this.getSynonymsWord();
     this.getPhrasalVerbWord();
 
     this.startInterval();
     
     
   }
 inputFocus(){
  this.userInputField.nativeElement.focus();
 }
 inputEnFocus(){
  this.userInputEnField.nativeElement.focus();
 }
 
   checkTranslation() {
     // Kullanıcının girdiği  türkçe kelimeyi kontrol et
     this.isTranslationCorrect = this.userInput.toLowerCase() === this.turkishEquivalent.toLowerCase();
   }
   checkTranslation2() {
    // Kullanıcının girdiği ingilizce kelimeyi kontrol et
    this.isTranslationCorrect2 = this.userInputEn.toLowerCase() === this.randomKey2.toLowerCase();
  }
 
   ngOnDestroy() {
     this.stopInterval();
   }
 
   onChangeWaitTime(event: any) {
     this.selectedWaitTime = +event.target.value;
     this.restartInterval();
     
   }
 
 
    startInterval() {
     this.intervalSubscription = interval(this.selectedWaitTime * 1000).subscribe(() => {
       this.autoget();
       
     });
   }
 
   private stopInterval() {
     if (this.intervalSubscription) {
       this.intervalSubscription.unsubscribe();
     }
   }
 
   private restartInterval() {
     this.stopInterval();
     this.startInterval();
   }
 
   del(){
 
     this.verbDictionary.delete(this.randomKey);
     console.log("Silindi:", this.randomKey);
     this.get();
     this.inputFocus();
     
 
   }
 
   showWord(){
     this.userInput=this.turkishEquivalent;
     this.isTranslationCorrect=true;
     this.inputFocus();
     
 
   }
   hint(){
    this.userInput=this.turkishEquivalent.substring(0,2);
    this.inputFocus();
    
  }
 
   autoget=()=>{
 // Rastgele bir kelime seçme
 let keys = Array.from(this.verbDictionary.keys());
  this.autorandomKey = keys[Math.floor(Math.random() * keys.length)];
 
 // Seçilen kelimenin Türkçe karşılığını alma
 this.autoturkishEquivalent = this.verbDictionary.get(this.autorandomKey);
 


 
 
     
   }

   getSynonymsWord(){
    
    this.randomWord = this.synonymsService.getAllSynonymsForRandomWord();
    
   }

   getIrregularVerbWord(){
    
    this.randomIrregularVerbWord = this.irregularVerbsService.getAllIrregularVerbsForRandomWord();
    
   }

   getPhrasalVerbWord(){
    
    this.randomPhrasalVerbWord = this.phrasalVerbsService.getAllPhrasalVerbsForRandomWord();
    
   }

  
 
   get(){
    this.inputFocus();
     this.userInput="";
     this.isTranslationCorrect=false;
     // Rastgele bir kelime seçme
 let keys = Array.from(this.verbDictionary.keys());
  this.randomKey = keys[Math.floor(Math.random() * 10)];
 
 // Seçilen kelimenin Türkçe karşılığını alma
 this.turkishEquivalent = this.verbDictionary.get(this.randomKey);

 
 
 // Sonucu ekrana basma
 console.log("İngilizce:", this.randomKey);
 console.log("Türkçe:", this.turkishEquivalent);

 
   }
 
   
load(){
  this.verbDictionary.set("often", "sıklıkla");
  this.verbDictionary.set("wind", "rüzgar");
  this.verbDictionary.set("fall", "düşmek");
  this.verbDictionary.set("country", "ülke");
  this.verbDictionary.set("event", "olay");
  this.verbDictionary.set("poor", "fakir");
  this.verbDictionary.set("hear", "duymak");
  this.verbDictionary.set("same", "aynı");
  this.verbDictionary.set("debate", "müzakere, tartışma");
  this.verbDictionary.set("record", "kayıt");
  this.verbDictionary.set("wish", "dilek, dilemek");
  this.verbDictionary.set("direction", "yön");
  this.verbDictionary.set("why", "niçin?");
  this.verbDictionary.set("election", "seçim");
  this.verbDictionary.set("art", "sanat");
  this.verbDictionary.set("air", "hava");
  this.verbDictionary.set("assume", "varsaymak, farzetmek");
  this.verbDictionary.set("step", "adım");
  this.verbDictionary.set("traditional", "geleneksel");
  this.verbDictionary.set("base", "üs, temel, baz");
  this.verbDictionary.set("something", "bir şey");
  this.verbDictionary.set("social", "sosyal");
  this.verbDictionary.set("easy", "kolay");
  this.verbDictionary.set("rich", "zengin");
  this.verbDictionary.set("probably", "muhtemelen");
  this.verbDictionary.set("write", "yazmak");
  this.verbDictionary.set("anyone", "kimse, herhangi biri, hiç kimse");
  this.verbDictionary.set("us", "bize");
  this.verbDictionary.set("sister", "kız kardeş");
  this.verbDictionary.set("determine", "belirlemek");
  this.verbDictionary.set("back", "geri");
  this.verbDictionary.set("much", "çok");
  this.verbDictionary.set("fact", "gerçek");
  this.verbDictionary.set("return", "dönüş");
  this.verbDictionary.set("effect", "efekt");
  this.verbDictionary.set("themselves", "kendilerini");
  this.verbDictionary.set("staff", "personel");
  this.verbDictionary.set("name", "isim");
  this.verbDictionary.set("away", "uzak, uzakta");
  this.verbDictionary.set("test", "test");
  this.verbDictionary.set("my", "benim");
  this.verbDictionary.set("third", "üçüncü");
  this.verbDictionary.set("campaign", "kampanya");
  this.verbDictionary.set("age", "yaş");
  this.verbDictionary.set("cancer", "kanser");
  this.verbDictionary.set("any", "herhangi, hiç, her");
  this.verbDictionary.set("possible", "mümkün");
  this.verbDictionary.set("town", "kasaba");
  this.verbDictionary.set("region", "bölge");
  this.verbDictionary.set("sense", "algı, duyu");
  this.verbDictionary.set("firm", "firma");
  this.verbDictionary.set("grow", "büyümek");
  this.verbDictionary.set("describe", "tanımlamak");
  this.verbDictionary.set("nearly", "neredeyse");
  this.verbDictionary.set("impact", "etki");
  this.verbDictionary.set("financial", "mali");
  this.verbDictionary.set("western", "batıda");
  this.verbDictionary.set("die", "ölmek");
  this.verbDictionary.set("shoot", "şut çekmek");
  this.verbDictionary.set("through", "vasıtasıyla");
  this.verbDictionary.set("education", "eğitim");
  this.verbDictionary.set("zombie", "zombi");
  this.verbDictionary.set("main", "ana");
  this.verbDictionary.set("unit", "ünite");
  this.verbDictionary.set("authority", "yetki, otorite");
  this.verbDictionary.set("want", "istemek");
  this.verbDictionary.set("eye", "göz");
  this.verbDictionary.set("mission", "misyon");
  this.verbDictionary.set("production", "üretim");
  this.verbDictionary.set("remember", "hatırlamak");
  this.verbDictionary.set("garden", "bahçe");
  this.verbDictionary.set("reveal", "ortaya çıkartmak, açığa vurmak");
  this.verbDictionary.set("score", "skor");
  this.verbDictionary.set("those", "bunlar");
  this.verbDictionary.set("foot", "ayak");
  this.verbDictionary.set("their", "onların");
  this.verbDictionary.set("love", "aşk");
  this.verbDictionary.set("teach", "öğretmek");
  this.verbDictionary.set("drive", "sürmek");
  this.verbDictionary.set("investment", "yatırım");
  this.verbDictionary.set("television", "televizyon");
  this.verbDictionary.set("model", "model");
  this.verbDictionary.set("personal", "kişisel");
  this.verbDictionary.set("play", "oynamak");
  this.verbDictionary.set("single", "tek");
  this.verbDictionary.set("force", "kuvvet");
  this.verbDictionary.set("south", "güney");
  this.verbDictionary.set("spend", "harcamak");
  this.verbDictionary.set("both", "her ikisi de, ikisi de");
  this.verbDictionary.set("provide", "sağlamak");
  this.verbDictionary.set("best", "en iyi, en iyisi, en");
  this.verbDictionary.set("take", "almak");
  this.verbDictionary.set("push", "itmek");
  this.verbDictionary.set("huge", "kocaman");
  this.verbDictionary.set("source", "kaynak");
  this.verbDictionary.set("cup", "fincan");
  this.verbDictionary.set("whatever", "her neyse");
  this.verbDictionary.set("sea", "deniz");
  this.verbDictionary.set("heat", "sıcaklık");
  this.verbDictionary.set("sure", "emin");
  this.verbDictionary.set("apply", "uygulamak, başvurmak");
  this.verbDictionary.set("individual", "bireysel");
  this.verbDictionary.set("little", "küçük");
  this.verbDictionary.set("how", "nasıl");
  this.verbDictionary.set("dark", "karanlık");
  this.verbDictionary.set("example", "örnek");
  this.verbDictionary.set("network", "ağ");
  this.verbDictionary.set("deal", "anlaşmak");
  this.verbDictionary.set("reach", "ulaşmak");
  this.verbDictionary.set("each", "her biri");
  this.verbDictionary.set("pull", "çekmek");
  this.verbDictionary.set("result", "sonuç");
  this.verbDictionary.set("operation", "ameliyat");
  this.verbDictionary.set("nothing", "hiçbir şey");
  this.verbDictionary.set("successful", "başarılı");
  this.verbDictionary.set("wall", "duvar");
  this.verbDictionary.set("door", "kapı");
  this.verbDictionary.set("turn", "çevirmek");
  this.verbDictionary.set("walk", "yürümek");
  this.verbDictionary.set("water", "su");
  this.verbDictionary.set("available", "müsait");
  this.verbDictionary.set("strong", "güçlü");
  this.verbDictionary.set("toward", "-e doğru");
  this.verbDictionary.set("someone", "birisi");
  this.verbDictionary.set("able", "yapabilmek, yapabilen");
  this.verbDictionary.set("analysis", "analiz, çözümleme");
  this.verbDictionary.set("leave", "ayrılmak");
  this.verbDictionary.set("prepare", "hazırlamak");
  this.verbDictionary.set("project", "proje");
  this.verbDictionary.set("environmental", "çevreci");
  this.verbDictionary.set("finish", "bitiş");
  this.verbDictionary.set("picture", "resim");
  this.verbDictionary.set("good", "iyi");
  this.verbDictionary.set("war", "savaş");
  this.verbDictionary.set("practice", "uygulama, pratik");
  this.verbDictionary.set("free", "ücretsiz");
  this.verbDictionary.set("true", "doğru");
  this.verbDictionary.set("high", "yüksek");
  this.verbDictionary.set("participant", "katılımcı");
  this.verbDictionary.set("majority", "çoğunluk");
  this.verbDictionary.set("strategy", "strateji");
  this.verbDictionary.set("her", "ona (kadın)");
  this.verbDictionary.set("choose", "seçmek");
  this.verbDictionary.set("west", "batı");
  this.verbDictionary.set("whose", "kimin");
  this.verbDictionary.set("mind", "zihin");
  this.verbDictionary.set("together", "birlikte");
  this.verbDictionary.set("afterwards", "ondan sonra");
  this.verbDictionary.set("lot", "çok");
  this.verbDictionary.set("set", "ayarlamak");
  this.verbDictionary.set("success", "başarı");
  this.verbDictionary.set("born", "doğmuş, doğum");
  this.verbDictionary.set("zodiac", "burçlar kuşağı");
  this.verbDictionary.set("professional", "profesyonel");
  this.verbDictionary.set("might", "belki");
  this.verbDictionary.set("stuff", "şey, madde");
  this.verbDictionary.set("generation", "nesil");
  this.verbDictionary.set("maintain", "sürdürmek");
  this.verbDictionary.set("owner", "sahip");
  this.verbDictionary.set("program", "program");
  this.verbDictionary.set("start", "başlama");
  this.verbDictionary.set("once", "bir zamanlar");
  this.verbDictionary.set("yourself", "kendin");
  this.verbDictionary.set("low", "düşük");
  this.verbDictionary.set("surface", "yüzey");
  this.verbDictionary.set("message", "mesaj");
  this.verbDictionary.set("reality", "gerçeklik");
  this.verbDictionary.set("where", "nerede");
  this.verbDictionary.set("responsibility", "sorumluluk");
  this.verbDictionary.set("past", "geçmiş");
  this.verbDictionary.set("court", "mahkeme");
  this.verbDictionary.set("beautiful", "güzel");
  this.verbDictionary.set("open", "açık");
  this.verbDictionary.set("fill", "doldurmak");
  this.verbDictionary.set("stage", "sahne");
  this.verbDictionary.set("nor", "ne de");
  this.verbDictionary.set("begin", "başlamak, başlatmak");
  this.verbDictionary.set("hair", "saç");
  this.verbDictionary.set("contain", "içermek");
  this.verbDictionary.set("small", "küçük");
  this.verbDictionary.set("detail", "ayrıntı");
  this.verbDictionary.set("many", "çok");
  this.verbDictionary.set("choice", "seçim, seçenek");
  this.verbDictionary.set("protect", "korumak");
  this.verbDictionary.set("particular", "özel, belirli");
  this.verbDictionary.set("act", "eylem, davranış");
  this.verbDictionary.set("evidence", "delil");
  this.verbDictionary.set("against", "karşı");
  this.verbDictionary.set("certainly", "kesinlikle");
  this.verbDictionary.set("character", "karakter");
  this.verbDictionary.set("treatment", "tedavi");
  this.verbDictionary.set("go", "gitmek");
  this.verbDictionary.set("note", "not");
  this.verbDictionary.set("field", "tarla, alan");
  this.verbDictionary.set("star", "yıldız");
  this.verbDictionary.set("none", "yok, hayır, hiçbiri, hiçbir şey");
  this.verbDictionary.set("eight", "sekiz");
  this.verbDictionary.set("tonight", "bu gece");
  this.verbDictionary.set("woman", "kadın");
  this.verbDictionary.set("fight", "kavga");
  this.verbDictionary.set("pattern", "desen");
  this.verbDictionary.set("wife", "kadın eş");
  this.verbDictionary.set("meet", "buluşmak");
  this.verbDictionary.set("professor", "profesör");
  this.verbDictionary.set("political", "siyasi");
  this.verbDictionary.set("view", "görünüm");
  this.verbDictionary.set("after", "sonra, ardından, daha sonra");
  this.verbDictionary.set("without", "olmadan");
  this.verbDictionary.set("pretty", "güzel");
  this.verbDictionary.set("blue", "mavi");
  this.verbDictionary.set("company", "şirket");
  this.verbDictionary.set("according", "göre");
  this.verbDictionary.set("center", "merkez");
  this.verbDictionary.set("career", "kariyer");
  this.verbDictionary.set("she", "o (kadın)");
  this.verbDictionary.set("dog", "köpek");
  this.verbDictionary.set("receive", "teslim almak");
  this.verbDictionary.set("identify", "belirlemek, tanımak, tanımlamak");
  this.verbDictionary.set("feel", "hissetmek");
  this.verbDictionary.set("late", "geç");
  this.verbDictionary.set("east", "doğu");
  this.verbDictionary.set("space", "boşluk");
  this.verbDictionary.set("feeling", "duygu");
  this.verbDictionary.set("author", "yazar");
  this.verbDictionary.set("produce", "üretmek");
  this.verbDictionary.set("response", "cevap vermek");
  this.verbDictionary.set("tough", "sert");
  this.verbDictionary.set("discuss", "tartışmak");
  this.verbDictionary.set("all", "her şey, tüm, bütün");
  this.verbDictionary.set("compare", "karşılaştırmak");
  this.verbDictionary.set("american", "amerikan");
  this.verbDictionary.set("game", "oyun");
  this.verbDictionary.set("pressure", "basınç");
  this.verbDictionary.set("edge", "kenar, kıyı");
  this.verbDictionary.set("sing", "şarkı söylemek");
  this.verbDictionary.set("heart", "kalp");
  this.verbDictionary.set("today", "bugün");
  this.verbDictionary.set("matter", "konu, mesele");
  this.verbDictionary.set("season", "sezon");
  this.verbDictionary.set("method", "yöntem");
  this.verbDictionary.set("several", "birkaç");
  this.verbDictionary.set("ability", "kabiliyet, yetenek, beceri");
  this.verbDictionary.set("role", "rol");
  this.verbDictionary.set("for", "için");
  this.verbDictionary.set("system", "sistem");
  this.verbDictionary.set("forward", "ileri");
  this.verbDictionary.set("clear", "temiz, açık");
  this.verbDictionary.set("institution", "kurum");
  this.verbDictionary.set("bank", "banka");
  this.verbDictionary.set("head", "kafa");
  this.verbDictionary.set("type", "tip, tür, model");
  this.verbDictionary.set("subject", "konu");
  this.verbDictionary.set("figure", "şekil");
  this.verbDictionary.set("ever", "hiç");
  this.verbDictionary.set("whom", "kime");
  this.verbDictionary.set("central", "merkezi");
  this.verbDictionary.set("others", "diğerleri");
  this.verbDictionary.set("simply", "basitçe");
  this.verbDictionary.set("follow", "takip etmek");
  this.verbDictionary.set("but", "fakat, ama, lakin");
  this.verbDictionary.set("miss", "özlemek");
  this.verbDictionary.set("speech", "konuşma");
  this.verbDictionary.set("physical", "fiziksel");
  this.verbDictionary.set("which", "hangi");
  this.verbDictionary.set("attorney", "avukat, vekil");
  this.verbDictionary.set("new", "yeni");
  this.verbDictionary.set("fear", "korku");
  this.verbDictionary.set("break", "kırmak");
  this.verbDictionary.set("heavy", "ağır");
  this.verbDictionary.set("sit", "oturmak");
  this.verbDictionary.set("laugh", "gülmek");
  this.verbDictionary.set("cause", "sebep olmak");
  this.verbDictionary.set("rather", "daha doğrusu");
  this.verbDictionary.set("show", "göstermek");
  this.verbDictionary.set("quality", "kalite");
  this.verbDictionary.set("light", "ışık");
  this.verbDictionary.set("recognize", "tanımak");
  this.verbDictionary.set("standard", "standart");
  this.verbDictionary.set("administration", "yönetim, idare");
  this.verbDictionary.set("try", "denemek");
  this.verbDictionary.set("home", "ev");
  this.verbDictionary.set("organization", "organizasyon");
  this.verbDictionary.set("future", "gelecek");
  this.verbDictionary.set("food", "gıda, yiyecek");
  this.verbDictionary.set("station", "istasyon");
  this.verbDictionary.set("thank", "teşekkür etmek");
  this.verbDictionary.set("morning", "sabah");
  this.verbDictionary.set("either", "ya");
  this.verbDictionary.set("service", "hizmet");
  this.verbDictionary.set("current", "şu andaki");
  this.verbDictionary.set("add", "eklemek, ilave etmek");
  this.verbDictionary.set("too", "çok, fazla");
  this.verbDictionary.set("weight", "ağırlık");
  this.verbDictionary.set("everything", "her şey");
  this.verbDictionary.set("shake", "sallamak");
  this.verbDictionary.set("other", "diğer");
  this.verbDictionary.set("near", "yakın");
  this.verbDictionary.set("commercial", "ticari");
  this.verbDictionary.set("goal", "hedef");
  this.verbDictionary.set("indicate", "belirtmek");
  this.verbDictionary.set("military", "askeri");
  this.verbDictionary.set("decide", "karar vermek");
  this.verbDictionary.set("conference", "konferans");
  this.verbDictionary.set("president", "devlet başkanı");
  this.verbDictionary.set("evening", "akşam");
  this.verbDictionary.set("modern", "modern");
  this.verbDictionary.set("summer", "yaz");
  this.verbDictionary.set("help", "yardım");
  this.verbDictionary.set("already", "zaten");
  this.verbDictionary.set("remove", "kaldırmak, uzaklaştırmak, ortadan kaldırmak");
  this.verbDictionary.set("various", "çeşitli");
  this.verbDictionary.set("task", "görev");
  this.verbDictionary.set("chance", "şans");
  this.verbDictionary.set("customer", "müşteri");
  this.verbDictionary.set("hot", "sıcak");
  this.verbDictionary.set("about", "hakkında, ilgili, konusunda");
  this.verbDictionary.set("population", "nüfus");
  this.verbDictionary.set("job", "meslek");
  this.verbDictionary.set("defense", "savunma");
  this.verbDictionary.set("black", "siyah");
  this.verbDictionary.set("management", "yönetim");
  this.verbDictionary.set("certain", "belirli, kesin");
  this.verbDictionary.set("condition", "şart");
  this.verbDictionary.set("young", "genç");
  this.verbDictionary.set("serious", "ciddi");
  this.verbDictionary.set("agency", "ajans, acenta");
  this.verbDictionary.set("would", "cekmişti");
  this.verbDictionary.set("song", "şarkı");
  

}

   get2(){
    this.inputEnFocus();
    this.userInputEn="";
    this.isTranslationCorrect2=false;
    // Rastgele bir kelime seçme
let keys2 = Array.from(this.verbDictionary2.keys());
 this.randomKey2 = keys2[Math.floor(Math.random() * 10)];

// Seçilen kelimenin Türkçe karşılığını alma
this.turkishEquivalent2 = this.verbDictionary2.get(this.randomKey2);

// Sonucu ekrana basma
console.log("İngilizce:", this.randomKey2);
console.log("Türkçe:", this.turkishEquivalent2);




  }

  showWord2(){
    this.userInputEn=this.randomKey2;
    this.isTranslationCorrect2=true;
    this.inputEnFocus();

  }
  hint2(){
    this.userInputEn=this.randomKey2.substring(0,2);
    this.inputEnFocus();
  }

  del2(){
 
    this.verbDictionary2.delete(this.randomKey2);
    console.log("Silindi:", this.randomKey2);
   
    this.get2();
    this.inputEnFocus();

  }
 

   load2(){
    this.verbDictionary2.set("often", "sıklıkla");
    this.verbDictionary2.set("wind", "rüzgar");
    this.verbDictionary2.set("fall", "düşmek");
    this.verbDictionary2.set("country", "ülke");
    this.verbDictionary2.set("event", "olay");
    this.verbDictionary2.set("poor", "fakir");
    this.verbDictionary2.set("hear", "duymak");
    this.verbDictionary2.set("same", "aynı");
    this.verbDictionary2.set("debate", "müzakere, tartışma");
    this.verbDictionary2.set("record", "kayıt");
    this.verbDictionary2.set("wish", "dilek, dilemek");
    this.verbDictionary2.set("direction", "yön");
    this.verbDictionary2.set("why", "niçin?");
    this.verbDictionary2.set("election", "seçim");
    this.verbDictionary2.set("art", "sanat");
    this.verbDictionary2.set("air", "hava");
    this.verbDictionary2.set("assume", "varsaymak, farzetmek");
    this.verbDictionary2.set("step", "adım");
    this.verbDictionary2.set("traditional", "geleneksel");
    this.verbDictionary2.set("base", "üs, temel, baz");
    this.verbDictionary2.set("something", "bir şey");
    this.verbDictionary2.set("social", "sosyal");
    this.verbDictionary2.set("easy", "kolay");
    this.verbDictionary2.set("rich", "zengin");
    this.verbDictionary2.set("probably", "muhtemelen");
    this.verbDictionary2.set("write", "yazmak");
    this.verbDictionary2.set("anyone", "kimse, herhangi biri, hiç kimse");
    this.verbDictionary2.set("us", "bize");
    this.verbDictionary2.set("sister", "kız kardeş");
    this.verbDictionary2.set("determine", "belirlemek");
    this.verbDictionary2.set("back", "geri");
    this.verbDictionary2.set("much", "çok");
    this.verbDictionary2.set("fact", "gerçek");
    this.verbDictionary2.set("return", "dönüş");
    this.verbDictionary2.set("effect", "efekt");
    this.verbDictionary2.set("themselves", "kendilerini");
    this.verbDictionary2.set("staff", "personel");
    this.verbDictionary2.set("name", "isim");
    this.verbDictionary2.set("away", "uzak, uzakta");
    this.verbDictionary2.set("test", "test");
    this.verbDictionary2.set("my", "benim");
    this.verbDictionary2.set("third", "üçüncü");
    this.verbDictionary2.set("campaign", "kampanya");
    this.verbDictionary2.set("age", "yaş");
    this.verbDictionary2.set("cancer", "kanser");
    this.verbDictionary2.set("any", "herhangi, hiç, her");
    this.verbDictionary2.set("possible", "mümkün");
    this.verbDictionary2.set("town", "kasaba");
    this.verbDictionary2.set("region", "bölge");
    this.verbDictionary2.set("sense", "algı, duyu");
    this.verbDictionary2.set("firm", "firma");
    this.verbDictionary2.set("grow", "büyümek");
    this.verbDictionary2.set("describe", "tanımlamak");
    this.verbDictionary2.set("nearly", "neredeyse");
    this.verbDictionary2.set("impact", "etki");
    this.verbDictionary2.set("financial", "mali");
    this.verbDictionary2.set("western", "batıda");
    this.verbDictionary2.set("die", "ölmek");
    this.verbDictionary2.set("shoot", "şut çekmek");
    this.verbDictionary2.set("through", "vasıtasıyla");
    this.verbDictionary2.set("education", "eğitim");
    this.verbDictionary2.set("zombie", "zombi");
    this.verbDictionary2.set("main", "ana");
    this.verbDictionary2.set("unit", "ünite");
    this.verbDictionary2.set("authority", "yetki, otorite");
    this.verbDictionary2.set("want", "istemek");
    this.verbDictionary2.set("eye", "göz");
    this.verbDictionary2.set("mission", "misyon");
    this.verbDictionary2.set("production", "üretim");
    this.verbDictionary2.set("remember", "hatırlamak");
    this.verbDictionary2.set("garden", "bahçe");
    this.verbDictionary2.set("reveal", "ortaya çıkartmak, açığa vurmak");
    this.verbDictionary2.set("score", "skor");
    this.verbDictionary2.set("those", "bunlar");
    this.verbDictionary2.set("foot", "ayak");
    this.verbDictionary2.set("their", "onların");
    this.verbDictionary2.set("love", "aşk");
    this.verbDictionary2.set("teach", "öğretmek");
    this.verbDictionary2.set("drive", "sürmek");
    this.verbDictionary2.set("investment", "yatırım");
    this.verbDictionary2.set("television", "televizyon");
    this.verbDictionary2.set("model", "model");
    this.verbDictionary2.set("personal", "kişisel");
    this.verbDictionary2.set("play", "oynamak");
    this.verbDictionary2.set("single", "tek");
    this.verbDictionary2.set("force", "kuvvet");
    this.verbDictionary2.set("south", "güney");
    this.verbDictionary2.set("spend", "harcamak");
    this.verbDictionary2.set("both", "her ikisi de, ikisi de");
    this.verbDictionary2.set("provide", "sağlamak");
    this.verbDictionary2.set("best", "en iyi, en iyisi, en");
    this.verbDictionary2.set("take", "almak");
    this.verbDictionary2.set("push", "itmek");
    this.verbDictionary2.set("huge", "kocaman");
    this.verbDictionary2.set("source", "kaynak");
    this.verbDictionary2.set("cup", "fincan");
    this.verbDictionary2.set("whatever", "her neyse");
    this.verbDictionary2.set("sea", "deniz");
    this.verbDictionary2.set("heat", "sıcaklık");
    this.verbDictionary2.set("sure", "emin");
    this.verbDictionary2.set("apply", "uygulamak, başvurmak");
    this.verbDictionary2.set("individual", "bireysel");
    this.verbDictionary2.set("little", "küçük");
    this.verbDictionary2.set("how", "nasıl");
    this.verbDictionary2.set("dark", "karanlık");
    this.verbDictionary2.set("example", "örnek");
    this.verbDictionary2.set("network", "ağ");
    this.verbDictionary2.set("deal", "anlaşmak");
    this.verbDictionary2.set("reach", "ulaşmak");
    this.verbDictionary2.set("each", "her biri");
    this.verbDictionary2.set("pull", "çekmek");
    this.verbDictionary2.set("result", "sonuç");
    this.verbDictionary2.set("operation", "ameliyat");
    this.verbDictionary2.set("nothing", "hiçbir şey");
    this.verbDictionary2.set("successful", "başarılı");
    this.verbDictionary2.set("wall", "duvar");
    this.verbDictionary2.set("door", "kapı");
    this.verbDictionary2.set("turn", "çevirmek");
    this.verbDictionary2.set("walk", "yürümek");
    this.verbDictionary2.set("water", "su");
    this.verbDictionary2.set("available", "müsait");
    this.verbDictionary2.set("strong", "güçlü");
    this.verbDictionary2.set("toward", "-e doğru");
    this.verbDictionary2.set("someone", "birisi");
    this.verbDictionary2.set("able", "yapabilmek, yapabilen");
    this.verbDictionary2.set("analysis", "analiz, çözümleme");
    this.verbDictionary2.set("leave", "ayrılmak");
    this.verbDictionary2.set("prepare", "hazırlamak");
    this.verbDictionary2.set("project", "proje");
    this.verbDictionary2.set("environmental", "çevreci");
    this.verbDictionary2.set("finish", "bitiş");
    this.verbDictionary2.set("picture", "resim");
    this.verbDictionary2.set("good", "iyi");
    this.verbDictionary2.set("war", "savaş");
    this.verbDictionary2.set("practice", "uygulama, pratik");
    this.verbDictionary2.set("free", "ücretsiz");
    this.verbDictionary2.set("true", "doğru");
    this.verbDictionary2.set("high", "yüksek");
    this.verbDictionary2.set("participant", "katılımcı");
    this.verbDictionary2.set("majority", "çoğunluk");
    this.verbDictionary2.set("strategy", "strateji");
    this.verbDictionary2.set("her", "ona (kadın)");
    this.verbDictionary2.set("choose", "seçmek");
    this.verbDictionary2.set("west", "batı");
    this.verbDictionary2.set("whose", "kimin");
    this.verbDictionary2.set("mind", "zihin");
    this.verbDictionary2.set("together", "birlikte");
    this.verbDictionary2.set("afterwards", "ondan sonra");
    this.verbDictionary2.set("lot", "çok");
    this.verbDictionary2.set("set", "ayarlamak");
    this.verbDictionary2.set("success", "başarı");
    this.verbDictionary2.set("born", "doğmuş, doğum");
    this.verbDictionary2.set("zodiac", "burçlar kuşağı");
    this.verbDictionary2.set("professional", "profesyonel");
    this.verbDictionary2.set("might", "belki");
    this.verbDictionary2.set("stuff", "şey, madde");
    this.verbDictionary2.set("generation", "nesil");
    this.verbDictionary2.set("maintain", "sürdürmek");
    this.verbDictionary2.set("owner", "sahip");
    this.verbDictionary2.set("program", "program");
    this.verbDictionary2.set("start", "başlama");
    this.verbDictionary2.set("once", "bir zamanlar");
    this.verbDictionary2.set("yourself", "kendin");
    this.verbDictionary2.set("low", "düşük");
    this.verbDictionary2.set("surface", "yüzey");
    this.verbDictionary2.set("message", "mesaj");
    this.verbDictionary2.set("reality", "gerçeklik");
    this.verbDictionary2.set("where", "nerede");
    this.verbDictionary2.set("responsibility", "sorumluluk");
    this.verbDictionary2.set("past", "geçmiş");
    this.verbDictionary2.set("court", "mahkeme");
    this.verbDictionary2.set("beautiful", "güzel");
    this.verbDictionary2.set("open", "açık");
    this.verbDictionary2.set("fill", "doldurmak");
    this.verbDictionary2.set("stage", "sahne");
    this.verbDictionary2.set("nor", "ne de");
    this.verbDictionary2.set("begin", "başlamak, başlatmak");
    this.verbDictionary2.set("hair", "saç");
    this.verbDictionary2.set("contain", "içermek");
    this.verbDictionary2.set("small", "küçük");
    this.verbDictionary2.set("detail", "ayrıntı");
    this.verbDictionary2.set("many", "çok");
    this.verbDictionary2.set("choice", "seçim, seçenek");
    this.verbDictionary2.set("protect", "korumak");
    this.verbDictionary2.set("particular", "özel, belirli");
    this.verbDictionary2.set("act", "eylem, davranış");
    this.verbDictionary2.set("evidence", "delil");
    this.verbDictionary2.set("against", "karşı");
    this.verbDictionary2.set("certainly", "kesinlikle");
    this.verbDictionary2.set("character", "karakter");
    this.verbDictionary2.set("treatment", "tedavi");
    this.verbDictionary2.set("go", "gitmek");
    this.verbDictionary2.set("note", "not");
    this.verbDictionary2.set("field", "tarla, alan");
    this.verbDictionary2.set("star", "yıldız");
    this.verbDictionary2.set("none", "yok, hayır, hiçbiri, hiçbir şey");
    this.verbDictionary2.set("eight", "sekiz");
    this.verbDictionary2.set("tonight", "bu gece");
    this.verbDictionary2.set("woman", "kadın");
    this.verbDictionary2.set("fight", "kavga");
    this.verbDictionary2.set("pattern", "desen");
    this.verbDictionary2.set("wife", "kadın eş");
    this.verbDictionary2.set("meet", "buluşmak");
    this.verbDictionary2.set("professor", "profesör");
    this.verbDictionary2.set("political", "siyasi");
    this.verbDictionary2.set("view", "görünüm");
    this.verbDictionary2.set("after", "sonra, ardından, daha sonra");
    this.verbDictionary2.set("without", "olmadan");
    this.verbDictionary2.set("pretty", "güzel");
    this.verbDictionary2.set("blue", "mavi");
    this.verbDictionary2.set("company", "şirket");
    this.verbDictionary2.set("according", "göre");
    this.verbDictionary2.set("center", "merkez");
    this.verbDictionary2.set("career", "kariyer");
    this.verbDictionary2.set("she", "o (kadın)");
    this.verbDictionary2.set("dog", "köpek");
    this.verbDictionary2.set("receive", "teslim almak");
    this.verbDictionary2.set("identify", "belirlemek, tanımak, tanımlamak");
    this.verbDictionary2.set("feel", "hissetmek");
    this.verbDictionary2.set("late", "geç");
    this.verbDictionary2.set("east", "doğu");
    this.verbDictionary2.set("space", "boşluk");
    this.verbDictionary2.set("feeling", "duygu");
    this.verbDictionary2.set("author", "yazar");
    this.verbDictionary2.set("produce", "üretmek");
    this.verbDictionary2.set("response", "cevap vermek");
    this.verbDictionary2.set("tough", "sert");
    this.verbDictionary2.set("discuss", "tartışmak");
    this.verbDictionary2.set("all", "her şey, tüm, bütün");
    this.verbDictionary2.set("compare", "karşılaştırmak");
    this.verbDictionary2.set("american", "amerikan");
    this.verbDictionary2.set("game", "oyun");
    this.verbDictionary2.set("pressure", "basınç");
    this.verbDictionary2.set("edge", "kenar, kıyı");
    this.verbDictionary2.set("sing", "şarkı söylemek");
    this.verbDictionary2.set("heart", "kalp");
    this.verbDictionary2.set("today", "bugün");
    this.verbDictionary2.set("matter", "konu, mesele");
    this.verbDictionary2.set("season", "sezon");
    this.verbDictionary2.set("method", "yöntem");
    this.verbDictionary2.set("several", "birkaç");
    this.verbDictionary2.set("ability", "kabiliyet, yetenek, beceri");
    this.verbDictionary2.set("role", "rol");
    this.verbDictionary2.set("for", "için");
    this.verbDictionary2.set("system", "sistem");
    this.verbDictionary2.set("forward", "ileri");
    this.verbDictionary2.set("clear", "temiz, açık");
    this.verbDictionary2.set("institution", "kurum");
    this.verbDictionary2.set("bank", "banka");
    this.verbDictionary2.set("head", "kafa");
    this.verbDictionary2.set("type", "tip, tür, model");
    this.verbDictionary2.set("subject", "konu");
    this.verbDictionary2.set("figure", "şekil");
    this.verbDictionary2.set("ever", "hiç");
    this.verbDictionary2.set("whom", "kime");
    this.verbDictionary2.set("central", "merkezi");
    this.verbDictionary2.set("others", "diğerleri");
    this.verbDictionary2.set("simply", "basitçe");
    this.verbDictionary2.set("follow", "takip etmek");
    this.verbDictionary2.set("but", "fakat, ama, lakin");
    this.verbDictionary2.set("miss", "özlemek");
    this.verbDictionary2.set("speech", "konuşma");
    this.verbDictionary2.set("physical", "fiziksel");
    this.verbDictionary2.set("which", "hangi");
    this.verbDictionary2.set("attorney", "avukat, vekil");
    this.verbDictionary2.set("new", "yeni");
    this.verbDictionary2.set("fear", "korku");
    this.verbDictionary2.set("break", "kırmak");
    this.verbDictionary2.set("heavy", "ağır");
    this.verbDictionary2.set("sit", "oturmak");
    this.verbDictionary2.set("laugh", "gülmek");
    this.verbDictionary2.set("cause", "sebep olmak");
    this.verbDictionary2.set("rather", "daha doğrusu");
    this.verbDictionary2.set("show", "göstermek");
    this.verbDictionary2.set("quality", "kalite");
    this.verbDictionary2.set("light", "ışık");
    this.verbDictionary2.set("recognize", "tanımak");
    this.verbDictionary2.set("standard", "standart");
    this.verbDictionary2.set("administration", "yönetim, idare");
    this.verbDictionary2.set("try", "denemek");
    this.verbDictionary2.set("home", "ev");
    this.verbDictionary2.set("organization", "organizasyon");
    this.verbDictionary2.set("future", "gelecek");
    this.verbDictionary2.set("food", "gıda, yiyecek");
    this.verbDictionary2.set("station", "istasyon");
    this.verbDictionary2.set("thank", "teşekkür etmek");
    this.verbDictionary2.set("morning", "sabah");
    this.verbDictionary2.set("either", "ya");
    this.verbDictionary2.set("service", "hizmet");
    this.verbDictionary2.set("current", "şu andaki");
    this.verbDictionary2.set("add", "eklemek, ilave etmek");
    this.verbDictionary2.set("too", "çok, fazla");
    this.verbDictionary2.set("weight", "ağırlık");
    this.verbDictionary2.set("everything", "her şey");
    this.verbDictionary2.set("shake", "sallamak");
    this.verbDictionary2.set("other", "diğer");
    this.verbDictionary2.set("near", "yakın");
    this.verbDictionary2.set("commercial", "ticari");
    this.verbDictionary2.set("goal", "hedef");
    this.verbDictionary2.set("indicate", "belirtmek");
    this.verbDictionary2.set("military", "askeri");
    this.verbDictionary2.set("decide", "karar vermek");
    this.verbDictionary2.set("conference", "konferans");
    this.verbDictionary2.set("president", "devlet başkanı");
    this.verbDictionary2.set("evening", "akşam");
    this.verbDictionary2.set("modern", "modern");
    this.verbDictionary2.set("summer", "yaz");
    this.verbDictionary2.set("help", "yardım");
    this.verbDictionary2.set("already", "zaten");
    this.verbDictionary2.set("remove", "kaldırmak, uzaklaştırmak, ortadan kaldırmak");
    this.verbDictionary2.set("various", "çeşitli");
    this.verbDictionary2.set("task", "görev");
    this.verbDictionary2.set("chance", "şans");
    this.verbDictionary2.set("customer", "müşteri");
    this.verbDictionary2.set("hot", "sıcak");
    this.verbDictionary2.set("about", "hakkında, ilgili, konusunda");
    this.verbDictionary2.set("population", "nüfus");
    this.verbDictionary2.set("job", "meslek");
    this.verbDictionary2.set("defense", "savunma");
    this.verbDictionary2.set("black", "siyah");
    this.verbDictionary2.set("management", "yönetim");
    this.verbDictionary2.set("certain", "belirli, kesin");
    this.verbDictionary2.set("condition", "şart");
    this.verbDictionary2.set("young", "genç");
    this.verbDictionary2.set("serious", "ciddi");
    this.verbDictionary2.set("agency", "ajans, acenta");
    this.verbDictionary2.set("would", "cekmişti");
    this.verbDictionary2.set("song", "şarkı");
    
   }


}

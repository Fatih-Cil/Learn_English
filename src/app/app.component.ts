import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

  
  title = 'Learn_English';
  verbDictionary = new Map();
  Dictionary = new Map();
 randomKey:any;
 turkishEquivalent:any;
 autorandomKey:any="English";
 autoturkishEquivalent:any="Türkçe";
 selectedWaitTime: number = 5;
 private intervalSubscription: Subscription | undefined;
 userInput: string = ''; // Kullanıcının girdiği Türkçe kelime
 isTranslationCorrect: boolean = false; // Türkçe kelimenin doğruluğu



 


  constructor() {
   
    
  }

  ngOnInit(): void {
    
    
    this.load();
    this.get();

    this.startInterval();
    
    
  }


  checkTranslation() {
    // Kullanıcının girdiği kelimeyi kontrol et
    this.isTranslationCorrect = this.userInput.toLowerCase() === this.turkishEquivalent.toLowerCase();
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
    this.get();

  }

  showWord(){
    this.userInput=this.turkishEquivalent;
    this.isTranslationCorrect=true;

  }

  autoget=()=>{
// Rastgele bir kelime seçme
let keys = Array.from(this.verbDictionary.keys());
 this.autorandomKey = keys[Math.floor(Math.random() * keys.length)];

// Seçilen kelimenin Türkçe karşılığını alma
this.autoturkishEquivalent = this.verbDictionary.get(this.autorandomKey);

    
  }

  get(){

    this.userInput="";
    this.isTranslationCorrect=false;
    // Rastgele bir kelime seçme
let keys = Array.from(this.verbDictionary.keys());
 this.randomKey = keys[Math.floor(Math.random() * keys.length)];

// Seçilen kelimenin Türkçe karşılığını alma
this.turkishEquivalent = this.verbDictionary.get(this.randomKey);

// Sonucu ekrana basma
console.log("İngilizce:", this.randomKey);
console.log("Türkçe:", this.turkishEquivalent);
  }


  


  load(){
   
    this.verbDictionary.set("the", "o");
this.verbDictionary.set("and", "ve");
this.verbDictionary.set("of", "nin");
this.verbDictionary.set("to", "e");
this.verbDictionary.set("a", "bir");
this.verbDictionary.set("I", "Ben");
this.verbDictionary.set("in", "içinde");
this.verbDictionary.set("you", "sen");
this.verbDictionary.set("that", "o");
this.verbDictionary.set("it", "o");
this.verbDictionary.set("for", "için");
this.verbDictionary.set("he", "o");
this.verbDictionary.set("on", "üzerinde");
this.verbDictionary.set("we", "biz");
this.verbDictionary.set("they", "onlar");
this.verbDictionary.set("be", "olmak");
this.verbDictionary.set("with", "ile");
this.verbDictionary.set("this", "bu");
this.verbDictionary.set("have", "sahip olmak");
this.verbDictionary.set("but", "ama");
this.verbDictionary.set("as", "olarak");
this.verbDictionary.set("not", "değil");
this.verbDictionary.set("at", "de");
this.verbDictionary.set("what", "ne");
this.verbDictionary.set("so", "bu yüzden");
this.verbDictionary.set("there", "orada");
this.verbDictionary.set("or", "veya");
this.verbDictionary.set("one", "bir");
this.verbDictionary.set("by", "tarafından");
this.verbDictionary.set("from", "den");
this.verbDictionary.set("all", "tüm");
this.verbDictionary.set("she", "o");
this.verbDictionary.set("no", "hayır");
this.verbDictionary.set("his", "onun");
this.verbDictionary.set("do", "yapmak");
this.verbDictionary.set("can", "yapabilir");
this.verbDictionary.set("if", "eğer");
this.verbDictionary.set("about", "hakkında");
this.verbDictionary.set("my", "benim");
this.verbDictionary.set("her", "onun");
this.verbDictionary.set("know", "bilmek");
this.verbDictionary.set("like", "gibi");
this.verbDictionary.set("well", "iyi");
this.verbDictionary.set("just", "sadece");
this.verbDictionary.set("think", "düşünmek");
this.verbDictionary.set("right", "doğru");
this.verbDictionary.set("then", "sonra");
this.verbDictionary.set("now", "şimdi");
this.verbDictionary.set("get", "almak");
this.verbDictionary.set("time", "zaman");
this.verbDictionary.set("again", "tekrar");
this.verbDictionary.set("own", "kendi");
this.verbDictionary.set("quite", "oldukça");
this.verbDictionary.set("give", "vermek");
this.verbDictionary.set("home", "ev");
this.verbDictionary.set("tell", "söylemek");
this.verbDictionary.set("world", "dünya");
this.verbDictionary.set("use", "kullanmak");
this.verbDictionary.set("always", "her zaman");
this.verbDictionary.set("great", "harika");
this.verbDictionary.set("problem", "sorun");
this.verbDictionary.set("love", "sevgi");
this.verbDictionary.set("name", "isim");
this.verbDictionary.set("percent", "yüzde");
this.verbDictionary.set("call", "aramak");
this.verbDictionary.set("water", "su");
this.verbDictionary.set("important", "önemli");
this.verbDictionary.set("country", "ülke");
this.verbDictionary.set("small", "küçük");
this.verbDictionary.set("feel", "hiss etmek");
this.verbDictionary.set("company", "şirket");
this.verbDictionary.set("perhaps", "belki");
this.verbDictionary.set("ago", "önce");
this.verbDictionary.set("hard", "zor");
this.verbDictionary.set("form", "form");
this.verbDictionary.set("party", "parti");
this.verbDictionary.set("means", "anlamına gelir");
this.verbDictionary.set("often", "sık sık");
this.verbDictionary.set("example", "örnek");
this.verbDictionary.set("play", "oynamak");
this.verbDictionary.set("fine", "iyi");
this.verbDictionary.set("certain", "kesin");
this.verbDictionary.set("turn", "dönmek");
this.verbDictionary.set("control", "kontrol etmek");
this.verbDictionary.set("sometimes", "bazen");
this.verbDictionary.set("political", "siyasi");
this.verbDictionary.set("top", "üst");
this.verbDictionary.set("story", "hikaye");
this.verbDictionary.set("door", "kapı");
this.verbDictionary.set("hear", "duymak");
this.verbDictionary.set("thinking", "düşünce");
this.verbDictionary.set("stay", "kalmak");
this.verbDictionary.set("market", "pazar");
this.verbDictionary.set("age", "yaş");
this.verbDictionary.set("support", "destek");
this.verbDictionary.set("clear", "net");
this.verbDictionary.set("police", "polis");
this.verbDictionary.set("department", "departman");
this.verbDictionary.set("table", "masa");
this.verbDictionary.set("experience", "deneyim");

this.verbDictionary.set("situation", "durum");
this.verbDictionary.set("alright", "tamam");
this.verbDictionary.set("court", "mahkeme");
this.verbDictionary.set("exactly", "tam olarak");
this.verbDictionary.set("main", "ana");
this.verbDictionary.set("rest", "geri kalan");
this.verbDictionary.set("son", "oğul");
this.verbDictionary.set("miss", "kaçırmak");
this.verbDictionary.set("hold", "tutmak");
this.verbDictionary.set("especially", "özellikle");
this.verbDictionary.set("thanks", "teşekkürler");
this.verbDictionary.set("middle", "orta");
this.verbDictionary.set("suppose", "varsaymak");
this.verbDictionary.set("field", "alan");
this.verbDictionary.set("game", "oyun");
this.verbDictionary.set("test", "test");
this.verbDictionary.set("dad", "baba");
this.verbDictionary.set("section", "bölüm");
this.verbDictionary.set("industry", "endüstri");
this.verbDictionary.set("sir", "efendi");
this.verbDictionary.set("finally", "sonunda");
this.verbDictionary.set("quality", "kalite");
this.verbDictionary.set("happen", "olmak");
this.verbDictionary.set("amount", "miktar");
this.verbDictionary.set("role", "rol");
this.verbDictionary.set("force", "kuvvet");
this.verbDictionary.set("difference", "fark");
this.verbDictionary.set("phone", "telefon");
this.verbDictionary.set("forward", "ileri");
this.verbDictionary.set("member", "üye");
this.verbDictionary.set("president", "başkan");
this.verbDictionary.set("production", "üretim");
this.verbDictionary.set("trouble", "sorun");
this.verbDictionary.set("management", "yönetim");
this.verbDictionary.set("account", "hesap");
this.verbDictionary.set("size", "boyut");
this.verbDictionary.set("hot", "sıcak");
this.verbDictionary.set("worth", "değer");
this.verbDictionary.set("simple", "basit");
this.verbDictionary.set("hell", "cehennem");
this.verbDictionary.set("approach", "yaklaşım");
this.verbDictionary.set("computer", "bilgisayar");
this.verbDictionary.set("straight", "düz");
this.verbDictionary.set("space", "uzay");
this.verbDictionary.set("colour", "renk");
this.verbDictionary.set("fall", "sonbahar");
this.verbDictionary.set("performance", "performans");
this.verbDictionary.set("culture", "kültür");
this.verbDictionary.set("pick", "seçmek");
this.verbDictionary.set("river", "nehir");
this.verbDictionary.set("kill", "öldürmek");
this.verbDictionary.set("follow", "takip etmek");
this.verbDictionary.set("function", "fonksiyon");
this.verbDictionary.set("practice", "pratik");
this.verbDictionary.set("former", "eski");
this.verbDictionary.set("sister", "kız kardeş");
this.verbDictionary.set("absolutely", "kesinlikle");
this.verbDictionary.set("somewhere", "bir yerlerde");
this.verbDictionary.set("include", "içermek");
this.verbDictionary.set("Sunday", "Pazar");
this.verbDictionary.set("television", "televizyon");
this.verbDictionary.set("western", "batı");
this.verbDictionary.set("opportunity", "fırsat");
this.verbDictionary.set("key", "anahtar");
this.verbDictionary.set("series", "dizi");
this.verbDictionary.set("born", "doğmak");
this.verbDictionary.set("park", "park");
this.verbDictionary.set("response", "tepki");
this.verbDictionary.set("style", "stil");
this.verbDictionary.set("hall", "salon");
this.verbDictionary.set("which", "hangi");
this.verbDictionary.set("up", "yukarı");
this.verbDictionary.set("out", "dışarı");
this.verbDictionary.set("would", "olurdu");
this.verbDictionary.set("when", "ne zaman");
this.verbDictionary.set("your", "senin");
this.verbDictionary.set("will", "olacak");
this.verbDictionary.set("their", "onların");
this.verbDictionary.set("who", "kim");
this.verbDictionary.set("some", "bazı");
this.verbDictionary.set("two", "iki");
this.verbDictionary.set("because", "çünkü");
this.verbDictionary.set("how", "nasıl");
this.verbDictionary.set("other", "diğer");
this.verbDictionary.set("could", "olabilir");
this.verbDictionary.set("our", "bizim");
this.verbDictionary.set("into", "içine");
this.verbDictionary.set("these", "bunlar");
this.verbDictionary.set("than", "daha");
this.verbDictionary.set("any", "herhangi");
this.verbDictionary.set("where", "nerede");
this.verbDictionary.set("over", "üzerinde");
this.verbDictionary.set("back", "geri");
this.verbDictionary.set("first", "ilk");
this.verbDictionary.set("much", "çok");
this.verbDictionary.set("down", "aşağı");
this.verbDictionary.set("its", "onun");
this.verbDictionary.set("should", "malı");
this.verbDictionary.set("after", "sonra");
this.verbDictionary.set("those", "onlar");


this.verbDictionary.set("may", "olabilir");
this.verbDictionary.set("something", "bir şey");
this.verbDictionary.set("three", "üç");
this.verbDictionary.set("little", "az");
this.verbDictionary.set("many", "birçok");
this.verbDictionary.set("why", "neden");
this.verbDictionary.set("before", "önce");
this.verbDictionary.set("such", "böyle");
this.verbDictionary.set("off", "kapalı");
this.verbDictionary.set("through", "aracılığıyla");
this.verbDictionary.set("go", "gitmek");
this.verbDictionary.set("yes", "evet");
this.verbDictionary.set("very", "çok");
this.verbDictionary.set("see", "görmek");
this.verbDictionary.set("people", "insanlar");
this.verbDictionary.set("here", "burada");
this.verbDictionary.set("good", "iyi");
this.verbDictionary.set("only", "sadece");
this.verbDictionary.set("really", "gerçekten");
this.verbDictionary.set("say", "demek");
this.verbDictionary.set("kind", "tür");
this.verbDictionary.set("actually", "aslında");
this.verbDictionary.set("sort", "sıralama");
this.verbDictionary.set("government", "hükümet");
this.verbDictionary.set("house", "ev");
this.verbDictionary.set("find", "bulmak");
this.verbDictionary.set("place", "yer");
this.verbDictionary.set("different", "farklı");
this.verbDictionary.set("part", "bölüm");
this.verbDictionary.set("sure", "emin");
this.verbDictionary.set("real", "gerçek");
this.verbDictionary.set("best", "en iyi");
this.verbDictionary.set("laugh", "gülmek");
this.verbDictionary.set("room", "oda");
this.verbDictionary.set("remember", "hatırlamak");
this.verbDictionary.set("nice", "hoş");
this.verbDictionary.set("rather", "tercihen");
this.verbDictionary.set("public", "genel");
this.verbDictionary.set("mother", "anne");
this.verbDictionary.set("less", "daha az");
this.verbDictionary.set("care", "önem vermek");
this.verbDictionary.set("ask", "sormak");
this.verbDictionary.set("social", "sosyal");
this.verbDictionary.set("national", "ulusal");
this.verbDictionary.set("book", "kitap");
this.verbDictionary.set("father", "baba");
this.verbDictionary.set("bad", "kötü");
this.verbDictionary.set("war", "savaş");
this.verbDictionary.set("large", "büyük");
this.verbDictionary.set("food", "yiyecek");
this.verbDictionary.set("moment", "an");
this.verbDictionary.set("sense", "anlam");
this.verbDictionary.set("law", "kanun");
this.verbDictionary.set("programme", "program");
this.verbDictionary.set("free", "ücretsiz");
this.verbDictionary.set("front", "ön");
this.verbDictionary.set("language", "dil");
this.verbDictionary.set("study", "çalışma");
this.verbDictionary.set("white", "beyaz");
this.verbDictionary.set("late", "geç");
this.verbDictionary.set("cut", "kesmek");
this.verbDictionary.set("south", "güney");
this.verbDictionary.set("report", "rapor");
this.verbDictionary.set("soon", "yakında");
this.verbDictionary.set("usually", "genellikle");
this.verbDictionary.set("bring", "getirmek");
this.verbDictionary.set("society", "toplum");
this.verbDictionary.set("history", "tarih");
this.verbDictionary.set("couple", "çift");
this.verbDictionary.set("available", "müsait");
this.verbDictionary.set("mum", "anne");
this.verbDictionary.set("church", "kilise");
this.verbDictionary.set("rate", "oran");
this.verbDictionary.set("council", "konsey");
this.verbDictionary.set("answer", "cevap");
this.verbDictionary.set("common", "ortak");
this.verbDictionary.set("north", "kuzey");
this.verbDictionary.set("happy", "mutlu");
this.verbDictionary.set("building", "bina");
this.verbDictionary.set("instead", "bunun yerine");
this.verbDictionary.set("action", "hareket");
this.verbDictionary.set("personal", "kişisel");
this.verbDictionary.set("write", "yazmak");
this.verbDictionary.set("team", "takım");
this.verbDictionary.set("heart", "kalp");
this.verbDictionary.set("value", "değer");
this.verbDictionary.set("issue", "sorun");
this.verbDictionary.set("various", "çeşitli");
this.verbDictionary.set("alone", "yalnız");
this.verbDictionary.set("letter", "mektup");
this.verbDictionary.set("range", "aralık");
this.verbDictionary.set("ground", "zemin");
this.verbDictionary.set("reading", "okuma");
this.verbDictionary.set("tomorrow", "yarın");
this.verbDictionary.set("due", "nedeniyle");
this.verbDictionary.set("knowledge", "bilgi");
this.verbDictionary.set("brother", "erkek kardeş");

this.verbDictionary.set("decision", "karar");
this.verbDictionary.set("beautiful", "güzel");
this.verbDictionary.set("standard", "standart");
this.verbDictionary.set("record", "kayıt");
this.verbDictionary.set("ball", "top");
this.verbDictionary.set("piece", "parça");
this.verbDictionary.set("interested", "ilgili");
this.verbDictionary.set("natural", "doğal");
this.verbDictionary.set("agree", "katılmak");
this.verbDictionary.set("modern", "modern");
this.verbDictionary.set("student", "öğrenci");
this.verbDictionary.set("summer", "yaz");
this.verbDictionary.set("pressure", "baskı");
this.verbDictionary.set("picture", "resim");
this.verbDictionary.set("relationship", "ilişki");
this.verbDictionary.set("dark", "karanlık");
this.verbDictionary.set("drive", "sürmek");
this.verbDictionary.set("visit", "ziyaret etmek");
this.verbDictionary.set("green", "yeşil");
this.verbDictionary.set("teaching", "öğretim");
this.verbDictionary.set("hotel", "otel");
this.verbDictionary.set("truth", "gerçek");
this.verbDictionary.set("design", "tasarım");
this.verbDictionary.set("wonder", "merak etmek");
this.verbDictionary.set("dinner", "akşam yemeği");
this.verbDictionary.set("medical", "medikal");
this.verbDictionary.set("fair", "adil");
this.verbDictionary.set("radio", "radyo");
this.verbDictionary.set("legal", "hukuki");
this.verbDictionary.set("pass", "geçmek");
this.verbDictionary.set("nearly", "neredeyse");
this.verbDictionary.set("daughter", "kız");
this.verbDictionary.set("trust", "güven");
this.verbDictionary.set("window", "pencere");
this.verbDictionary.set("carry", "taşımak");
this.verbDictionary.set("rights", "haklar");
this.verbDictionary.set("fight", "kavga");
this.verbDictionary.set("environment", "çevre");
this.verbDictionary.set("cool", "serin");
this.verbDictionary.set("sex", "cinsiyet");
this.verbDictionary.set("eye", "göz");
this.verbDictionary.set("region", "bölge");
this.verbDictionary.set("still", "hala");
this.verbDictionary.set("last", "son");
this.verbDictionary.set("being", "varlık");
this.verbDictionary.set("must", "meli");
this.verbDictionary.set("another", "başka");
this.verbDictionary.set("between", "arasında");
this.verbDictionary.set("might", "belki");
this.verbDictionary.set("both", "her ikisi de");
this.verbDictionary.set("five", "beş");
this.verbDictionary.set("four", "dört");
this.verbDictionary.set("around", "etrafında");

this.verbDictionary.set("while", "iken");
this.verbDictionary.set("each", "her biri");
this.verbDictionary.set("under", "altında");
this.verbDictionary.set("away", "uzakta");
this.verbDictionary.set("every", "her");
this.verbDictionary.set("next", "sonraki");
this.verbDictionary.set("anything", "herhangi bir şey");
this.verbDictionary.set("few", "birkaç");
this.verbDictionary.set("though", "rağmen");
this.verbDictionary.set("since", "beri");
this.verbDictionary.set("against", "karşı");
this.verbDictionary.set("second", "ikinci");
this.verbDictionary.set("nothing", "hiçbir şey");
this.verbDictionary.set("without", "olmadan");
this.verbDictionary.set("during", "sırasında");
this.verbDictionary.set("six", "altı");
this.verbDictionary.set("enough", "yeterli");
this.verbDictionary.set("once", "bir kere");
this.verbDictionary.set("however", "ancak");
this.verbDictionary.set("half", "yarım");
this.verbDictionary.set("yet", "henüz");
this.verbDictionary.set("whether", "olup olmadığı");
this.verbDictionary.set("everything", "her şey");
this.verbDictionary.set("until", "kadar");
this.verbDictionary.set("hundred", "yüz");
this.verbDictionary.set("within", "içinde");
this.verbDictionary.set("ten", "on");
this.verbDictionary.set("twenty", "yirmi");
this.verbDictionary.set("either", "ya");
this.verbDictionary.set("mean", "anlamına gelmek");
this.verbDictionary.set("come", "gelmek");
this.verbDictionary.set("also", "ayrıca");
this.verbDictionary.set("okay", "tamam");
this.verbDictionary.set("want", "istemek");
this.verbDictionary.set("way", "yol");
this.verbDictionary.set("even", "bile");
this.verbDictionary.set("new", "yeni");
this.verbDictionary.set("too", "çok");
this.verbDictionary.set("work", "çalışmak");
this.verbDictionary.set("point", "nokta");
this.verbDictionary.set("number", "sayı");
this.verbDictionary.set("school", "okul");
this.verbDictionary.set("end", "son");
this.verbDictionary.set("money", "para");
this.verbDictionary.set("better", "daha iyi");
this.verbDictionary.set("big", "büyük");
this.verbDictionary.set("probably", "muhtemelen");
this.verbDictionary.set("fact", "gerçek");
this.verbDictionary.set("bit", "biraz");
this.verbDictionary.set("later", "sonra");


this.verbDictionary.set("hand", "el");
this.verbDictionary.set("already", "zaten");
this.verbDictionary.set("mind", "akıl");
this.verbDictionary.set("thank", "teşekkür etmek");
this.verbDictionary.set("job", "iş");
this.verbDictionary.set("business", "iş");
this.verbDictionary.set("else", "başka");
this.verbDictionary.set("group", "grup");
this.verbDictionary.set("question", "soru");
this.verbDictionary.set("open", "açık");
this.verbDictionary.set("pretty", "güzel");
this.verbDictionary.set("matter", "önemli");
this.verbDictionary.set("information", "bilgi");
this.verbDictionary.set("hey", "hey");
this.verbDictionary.set("face", "yüz");
this.verbDictionary.set("early", "erken");
this.verbDictionary.set("please", "lütfen");
this.verbDictionary.set("pay", "ödemek");
this.verbDictionary.set("woman", "kadın");
this.verbDictionary.set("wrong", "yanlış");
this.verbDictionary.set("further", "daha fazla");
this.verbDictionary.set("move", "hareket etmek");
this.verbDictionary.set("guy", "adam");
this.verbDictionary.set("girl", "kız");
this.verbDictionary.set("wife", "eş");
this.verbDictionary.set("education", "eğitim");
this.verbDictionary.set("close", "kapat");
this.verbDictionary.set("stop", "durmak");
this.verbDictionary.set("class", "sınıf");
this.verbDictionary.set("short", "kısa");
this.verbDictionary.set("community", "topluluk");
this.verbDictionary.set("cost", "maliyet");
this.verbDictionary.set("friend", "arkadaş");
this.verbDictionary.set("economic", "ekonomik");
this.verbDictionary.set("position", "pozisyon");
this.verbDictionary.set("period", "dönem");
this.verbDictionary.set("policy", "politika");
this.verbDictionary.set("special", "özel");
this.verbDictionary.set("centre", "merkez");
this.verbDictionary.set("low", "düşük");
this.verbDictionary.set("meet", "tanışmak");
this.verbDictionary.set("west", "batı");
this.verbDictionary.set("art", "sanat");
this.verbDictionary.set("century", "yüzyıl");
this.verbDictionary.set("dead", "ölü");
this.verbDictionary.set("particularly", "özellikle");
this.verbDictionary.set("hi", "merhaba");
this.verbDictionary.set("result", "sonuç");
this.verbDictionary.set("plan", "plan");
this.verbDictionary.set("ready", "hazır");

this.verbDictionary.set("sound", "ses");
this.verbDictionary.set("international", "uluslararası");
this.verbDictionary.set("necessary", "gerekli");
this.verbDictionary.set("training", "eğitim");
this.verbDictionary.set("ok", "tamam");
this.verbDictionary.set("according", "göre");
this.verbDictionary.set("single", "tek");
this.verbDictionary.set("term", "terim");
this.verbDictionary.set("stand", "durmak");
this.verbDictionary.set("hair", "saç");
this.verbDictionary.set("bank", "banka");
this.verbDictionary.set("obviously", "açıkça");
this.verbDictionary.set("east", "doğu");
this.verbDictionary.set("writing", "yazma");
this.verbDictionary.set("return", "geri dönme");
this.verbDictionary.set("break", "mola");
this.verbDictionary.set("project", "proje");
this.verbDictionary.set("minute", "dakika");
this.verbDictionary.set("check", "kontrol etmek");
this.verbDictionary.set("wish", "dilemek");
this.verbDictionary.set("serious", "ciddi");
this.verbDictionary.set("minister", "bakan");
this.verbDictionary.set("growth", "büyüme");
this.verbDictionary.set("blood", "kan");
this.verbDictionary.set("bill", "fatura");
this.verbDictionary.set("trade", "ticaret");
this.verbDictionary.set("list", "liste");
this.verbDictionary.set("basis", "temel");
this.verbDictionary.set("floor", "zemin");
this.verbDictionary.set("island", "ada");
this.verbDictionary.set("sign", "işaret");
this.verbDictionary.set("basic", "temel");
this.verbDictionary.set("military", "askeri");
this.verbDictionary.set("press", "basın");
this.verbDictionary.set("spend", "harcamak");
this.verbDictionary.set("consider", "düşünmek");
this.verbDictionary.set("sea", "deniz");
this.verbDictionary.set("complete", "tamamlamak");
this.verbDictionary.set("bye", "hoşça kal");
this.verbDictionary.set("theory", "teori");
this.verbDictionary.set("shot", "ateş");
this.verbDictionary.set("energy", "enerji");
this.verbDictionary.set("offer", "teklif");
this.verbDictionary.set("patients", "hastalar");
this.verbDictionary.set("significant", "önemli");
this.verbDictionary.set("deep", "derin");
this.verbDictionary.set("begin", "başlamak");
this.verbDictionary.set("quickly", "hızlıca");
this.verbDictionary.set("charge", "ücret");
this.verbDictionary.set("original", "orijinal");

this.verbDictionary.set("dollar", "dolar");
this.verbDictionary.set("square", "kare");
this.verbDictionary.set("direct", "doğrudan");
this.verbDictionary.set("forty", "kırk");
this.verbDictionary.set("nobody", "hiç kimse");
this.verbDictionary.set("unless", "eğer ki");
this.verbDictionary.set("mine", "benimki");
this.verbDictionary.set("anybody", "herhangi biri");
this.verbDictionary.set("till", "kadar");
this.verbDictionary.set("herself", "kendi");
this.verbDictionary.set("twelve", "on iki");
this.verbDictionary.set("fifteen", "on beş");
this.verbDictionary.set("beyond", "ötesinde");
this.verbDictionary.set("whom", "kimi");
this.verbDictionary.set("below", "aşağıda");
this.verbDictionary.set("none", "hiçbiri");
this.verbDictionary.set("nor", "ne de");
this.verbDictionary.set("more", "daha fazla");
this.verbDictionary.set("most", "çoğu");
this.verbDictionary.set("long", "uzun");
this.verbDictionary.set("need", "ihtiyaç");
this.verbDictionary.set("Mr.", "Bay");
this.verbDictionary.set("thought", "düşünce");
this.verbDictionary.set("lot", "çok");
this.verbDictionary.set("same", "aynı");
this.verbDictionary.set("old", "eski");
this.verbDictionary.set("word", "kelime");
this.verbDictionary.set("course", "tabii ki");
this.verbDictionary.set("life", "hayat");
this.verbDictionary.set("side", "yan");
this.verbDictionary.set("god", "tanrı");
this.verbDictionary.set("week", "hafta");
this.verbDictionary.set("family", "aile");
this.verbDictionary.set("ever", "her zaman");
this.verbDictionary.set("talk", "konuşma");
this.verbDictionary.set("state", "durum");
this.verbDictionary.set("set", "ayarla");
this.verbDictionary.set("system", "sistem");
this.verbDictionary.set("keep", "sakla");
this.verbDictionary.set("try", "denemek");
this.verbDictionary.set("change", "değişiklik");
this.verbDictionary.set("general", "genel");
this.verbDictionary.set("area", "alan");
this.verbDictionary.set("believe", "inanmak");
this.verbDictionary.set("young", "genç");
this.verbDictionary.set("power", "güç");
this.verbDictionary.set("almost", "neredeyse");
this.verbDictionary.set("start", "başla");
this.verbDictionary.set("person", "kişi");
this.verbDictionary.set("become", "olmak");

this.verbDictionary.set("local", "yerel");
this.verbDictionary.set("run", "koşmak");
this.verbDictionary.set("anyway", "neyse ki");
this.verbDictionary.set("full", "tam");
this.verbDictionary.set("office", "ofis");
this.verbDictionary.set("live", "canlı");
this.verbDictionary.set("development", "gelişim");
this.verbDictionary.set("level", "seviye");
this.verbDictionary.set("understand", "anlamak");
this.verbDictionary.set("boy", "erkek çocuk");
this.verbDictionary.set("research", "araştırma");
this.verbDictionary.set("light", "ışık");
this.verbDictionary.set("data", "veri");
this.verbDictionary.set("wait", "bekle");
this.verbDictionary.set("road", "yol");
this.verbDictionary.set("particular", "özellikle");
this.verbDictionary.set("paper", "kağıt");
this.verbDictionary.set("view", "görünüm");
this.verbDictionary.set("major", "büyük");
this.verbDictionary.set("deal", "anlaşma");
this.verbDictionary.set("news", "haber");
this.verbDictionary.set("future", "gelecek");
this.verbDictionary.set("death", "ölüm");
this.verbDictionary.set("figure", "şekil");
this.verbDictionary.set("land", "arazi");
this.verbDictionary.set("process", "proses");
this.verbDictionary.set("meeting", "toplantı");
this.verbDictionary.set("seem", "görünmek");
this.verbDictionary.set("interesting", "ilginç");
this.verbDictionary.set("private", "özel");
this.verbDictionary.set("easy", "kolay");
this.verbDictionary.set("month", "ay");
this.verbDictionary.set("evidence", "kanıt");
this.verbDictionary.set("total", "toplam");
this.verbDictionary.set("indeed", "gerçekten");
this.verbDictionary.set("strong", "güçlü");
this.verbDictionary.set("stage", "aşama");
this.verbDictionary.set("committee", "komite");
this.verbDictionary.set("tax", "vergi");
this.verbDictionary.set("listen", "dinle");
this.verbDictionary.set("likely", "muhtemelen");
this.verbDictionary.set("sit", "otur");
this.verbDictionary.set("feeling", "duygu");
this.verbDictionary.set("voice", "ses");
this.verbDictionary.set("poor", "fakir");
this.verbDictionary.set("self", "kendisi");
this.verbDictionary.set("chance", "şans");
this.verbDictionary.set("speak", "konuş");
this.verbDictionary.set("earlier", "daha önce");
this.verbDictionary.set("evening", "akşam");

this.verbDictionary.set("hello", "merhaba");
this.verbDictionary.set("hospital", "hastane");
this.verbDictionary.set("simply", "basitçe");
this.verbDictionary.set("walk", "yürü");
this.verbDictionary.set("hit", "vurmak");
this.verbDictionary.set("recent", "son");
this.verbDictionary.set("final", "son");
this.verbDictionary.set("beginning", "başlangıç");
this.verbDictionary.set("attention", "dikkat");
this.verbDictionary.set("security", "güvenlik");
this.verbDictionary.set("send", "gönder");
this.verbDictionary.set("dog", "köpek");
this.verbDictionary.set("degree", "derece");
this.verbDictionary.set("dear", "sevgili");
this.verbDictionary.set("date", "tarih");
this.verbDictionary.set("normal", "normal");
this.verbDictionary.set("blue", "mavi");
this.verbDictionary.set("material", "malzeme");
this.verbDictionary.set("choice", "seçenek");
this.verbDictionary.set("cover", "kapak");
this.verbDictionary.set("afternoon", "öğleden sonra");
this.verbDictionary.set("science", "bilim");
this.verbDictionary.set("movement", "hareket");
this.verbDictionary.set("expect", "bekle");
this.verbDictionary.set("capital", "başkent");
this.verbDictionary.set("economy", "ekonomi");
this.verbDictionary.set("Christmas", "Noel");
this.verbDictionary.set("fast", "hızlı");
this.verbDictionary.set("continue", "devam et");
this.verbDictionary.set("earth", "dünya");
this.verbDictionary.set("organisation", "organizasyon");
this.verbDictionary.set("wall", "duvar");
this.verbDictionary.set("property", "mülkiyet");
this.verbDictionary.set("activity", "etkinlik");
this.verbDictionary.set("note", "not");
this.verbDictionary.set("treatment", "tedavi");
this.verbDictionary.set("station", "istasyon");
this.verbDictionary.set("teacher", "öğretmen");
this.verbDictionary.set("forget", "unut");
this.verbDictionary.set("although", "gerçi");
this.verbDictionary.set("past", "geçmiş");
this.verbDictionary.set("himself", "kendi");
this.verbDictionary.set("seven", "yedi");
this.verbDictionary.set("eight", "sekiz");
this.verbDictionary.set("along", "boyunca");
this.verbDictionary.set("round", "etrafında");
this.verbDictionary.set("several", "birkaç");
this.verbDictionary.set("someone", "birisi");
this.verbDictionary.set("whatever", "her neyse");
this.verbDictionary.set("among", "arasında");

this.verbDictionary.set("across", "karşısına");
this.verbDictionary.set("behind", "arkasında");
this.verbDictionary.set("million", "milyon");
this.verbDictionary.set("outside", "dışında");
this.verbDictionary.set("nine", "dokuz");
this.verbDictionary.set("thousand", "bin");
this.verbDictionary.set("shall", "olmalı");
this.verbDictionary.set("myself", "kendim");
this.verbDictionary.set("themselves", "kendileri");
this.verbDictionary.set("itself", "kendisi");
this.verbDictionary.set("somebody", "birisi");
this.verbDictionary.set("upon", "üzerinde");
this.verbDictionary.set("thirty", "otuz");
this.verbDictionary.set("third", "üçüncü");
this.verbDictionary.set("above", "yukarıda");
this.verbDictionary.set("therefore", "bu nedenle");
this.verbDictionary.set("everybody", "herkes");
this.verbDictionary.set("towards", "doğru");
this.verbDictionary.set("thus", "böylece");
this.verbDictionary.set("everyone", "herkes");
this.verbDictionary.set("near", "yakın");
this.verbDictionary.set("inside", "içinde");
this.verbDictionary.set("nineteen", "on dokuz");
this.verbDictionary.set("yourself", "kendin");
this.verbDictionary.set("fifty", "elli");
this.verbDictionary.set("whose", "kimin");
this.verbDictionary.set("anyone", "herhangi birisi");
this.verbDictionary.set("per", "her bir");
this.verbDictionary.set("except", "hariç");
this.verbDictionary.set("take", "almak");
this.verbDictionary.set("make", "yapmak");
this.verbDictionary.set("year", "yıl");
this.verbDictionary.set("look", "bakmak");
this.verbDictionary.set("thing", "şey");
this.verbDictionary.set("man", "adam");
this.verbDictionary.set("put", "koymak");
this.verbDictionary.set("let", "bırakmak");
this.verbDictionary.set("day", "gün");
this.verbDictionary.set("never", "asla");
this.verbDictionary.set("night", "gece");
this.verbDictionary.set("left", "sol");
this.verbDictionary.set("found", "bulmak");
this.verbDictionary.set("high", "yüksek");
this.verbDictionary.set("help", "yardım etmek");
this.verbDictionary.set("maybe", "belki");
this.verbDictionary.set("far", "uzak");
this.verbDictionary.set("case", "durum");
this.verbDictionary.set("whole", "bütün");
this.verbDictionary.set("today", "bugün");
this.verbDictionary.set("sorry", "üzgünüm");

this.verbDictionary.set("show", "göstermek");
this.verbDictionary.set("able", "yetenekli");
this.verbDictionary.set("together", "birlikte");
this.verbDictionary.set("order", "sıra");
this.verbDictionary.set("head", "baş");
this.verbDictionary.set("least", "en az");
this.verbDictionary.set("read", "okumak");
this.verbDictionary.set("morning", "sabah");
this.verbDictionary.set("car", "araba");
this.verbDictionary.set("city", "şehir");
this.verbDictionary.set("possible", "mümkün");
this.verbDictionary.set("cause", "sebep olmak");
this.verbDictionary.set("present", "şu anki");
this.verbDictionary.set("leave", "ayrılmak");
this.verbDictionary.set("service", "hizmet");
this.verbDictionary.set("stuff", "şey");
this.verbDictionary.set("idea", "fikir");
this.verbDictionary.set("line", "çizgi");
this.verbDictionary.set("guess", "tahmin");
this.verbDictionary.set("reason", "neden");
this.verbDictionary.set("black", "siyah");
this.verbDictionary.set("human", "insan");
this.verbDictionary.set("university", "üniversite");
this.verbDictionary.set("body", "vücut");
this.verbDictionary.set("act", "hareket etmek");
this.verbDictionary.set("hope", "umut");
this.verbDictionary.set("child", "çocuk");
this.verbDictionary.set("interest", "ilgi");
this.verbDictionary.set("air", "hava");
this.verbDictionary.set("Mrs.", "Bayan");
this.verbDictionary.set("living", "yaşayan");
this.verbDictionary.set("difficult", "zor");
this.verbDictionary.set("town", "kasaba");
this.verbDictionary.set("music", "müzik");
this.verbDictionary.set("health", "sağlık");
this.verbDictionary.set("buy", "satın almak");
this.verbDictionary.set("certainly", "kesinlikle");
this.verbDictionary.set("type", "tür");
this.verbDictionary.set("street", "sokak");
this.verbDictionary.set("effect", "etki");
this.verbDictionary.set("subject", "konu");
this.verbDictionary.set("college", "kolej");
this.verbDictionary.set("red", "kırmızı");
this.verbDictionary.set("hour", "saat");
this.verbDictionary.set("provide", "sağlamak");
this.verbDictionary.set("watch", "izlemek");
this.verbDictionary.set("staff", "personel");
this.verbDictionary.set("board", "tahta");
this.verbDictionary.set("husband", "eş");
this.verbDictionary.set("individual", "birey");
this.verbDictionary.set("similar", "benzer");
this.verbDictionary.set("doctor", "doktor");
this.verbDictionary.set("yesterday", "dün");
this.verbDictionary.set("nature", "doğa");
this.verbDictionary.set("increase", "artış");
this.verbDictionary.set("Dr", "Dr");
this.verbDictionary.set("bed", "yatak");
this.verbDictionary.set("fire", "ateş");
this.verbDictionary.set("baby", "bebek");
this.verbDictionary.set("cold", "soğuk");
this.verbDictionary.set("central", "merkezi");
this.verbDictionary.set("throat", "boğaz");
this.verbDictionary.set("eat", "yemek");
this.verbDictionary.set("learn", "öğrenmek");
this.verbDictionary.set("price", "fiyat");
this.verbDictionary.set("foreign", "yabancı");
this.verbDictionary.set("lead", "liderlik etmek");
this.verbDictionary.set("analysis", "analiz");
this.verbDictionary.set("post", "gönderi");
this.verbDictionary.set("fun", "eğlence");
this.verbDictionary.set("financial", "mali");
this.verbDictionary.set("ahead", "önünde");
this.verbDictionary.set("tonight", "bu gece");
this.verbDictionary.set("lower", "düşük");
this.verbDictionary.set("current", "güncel");
this.verbDictionary.set("recently", "son zamanlarda");
this.verbDictionary.set("model", "model");
this.verbDictionary.set("population", "nüfus");
this.verbDictionary.set("funny", "komik");
this.verbDictionary.set("fish", "balık");
this.verbDictionary.set("clearly", "açıkça");
this.verbDictionary.set("share", "paylaşmak");
this.verbDictionary.set("doubt", "şüphe");
this.verbDictionary.set("wide", "geniş");
this.verbDictionary.set("step", "adım");
this.verbDictionary.set("income", "gelir");
this.verbDictionary.set("drink", "içmek");
this.verbDictionary.set("authority", "otorite");
this.verbDictionary.set("film", "film");
this.verbDictionary.set("completely", "tamamen");
this.verbDictionary.set("worry", "endişe");
this.verbDictionary.set("generally", "genellikle");
this.verbDictionary.set("page", "sayfa");
this.verbDictionary.set("average", "ortalama");
this.verbDictionary.set("respect", "saygı");
this.verbDictionary.set("structure", "yapı");
this.verbDictionary.set("club", "kulüp");
this.verbDictionary.set("purpose", "amaç");
this.verbDictionary.set("specific", "belirli");





  }
  

}




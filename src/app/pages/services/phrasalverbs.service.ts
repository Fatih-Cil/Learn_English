import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhrasalverbsService {
  private phrasalVerbs: Map<string, string>;
  constructor() { 

    this.phrasalVerbs = new Map<string, string>();
    this.initializePhrasalVerbs();
  }

  
  private getRandomWord(): string {
    const words = Array.from(this.phrasalVerbs.keys());
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  getAllPhrasalVerbsForRandomWord(): { word: string, phrasalVerb: string } {
    const randomWord = this.getRandomWord();
    const phrasalVerb = this.phrasalVerbs.get(randomWord);
    return { word: randomWord, phrasalVerb: phrasalVerb! };
  }

  private initializePhrasalVerbs(): void {
    this.phrasalVerbs.set('Add Up', 'Akla Yatkın Olmak');
this.phrasalVerbs.set('Blow Up', 'Bir Şeyin Içerisini Gazla Doldurmak, Patlamak');
this.phrasalVerbs.set('Break Down', 'Bozulmak');
this.phrasalVerbs.set('Break In On', 'Bir Sohbeti Bölmek');
this.phrasalVerbs.set('Bring About', 'Bir Şeye Sebep Olmak');
this.phrasalVerbs.set('Bring Down', 'Bir Şeyi Azaltmak, Devirmek, Indirmek');
this.phrasalVerbs.set('Bring In', 'Bir Şeyi Tanıtmak');
this.phrasalVerbs.set('Bring Up', 'Bir Konudan Bahsetmek');
this.phrasalVerbs.set('Call Off', 'Bir Şeyi Yapmaktan Vazgeçmek');
this.phrasalVerbs.set('Call On', 'Ezbere Okumak');
this.phrasalVerbs.set('Care For', 'Ilgilenmek, Bakmak, Sevmek');
this.phrasalVerbs.set('Carry On', 'Devam Etmek');
this.phrasalVerbs.set('Catch On', 'Tutmak');
this.phrasalVerbs.set('Catch Up', 'Bir Şeyin Hızına Yetişmek');
this.phrasalVerbs.set('Catch Up With', 'Yakın Olmak');
this.phrasalVerbs.set('Change Over', 'Kullanılan Yöntemi Bırakmak');
this.phrasalVerbs.set('Check Up On', 'İncelemek, Kontrol Etmek');
this.phrasalVerbs.set('Close Down', 'Kapatmak, Kepenk Indirmek');
this.phrasalVerbs.set('Come Across', 'Karşılaşmak, Tesadüfen Bir Araya Gelmek');
this.phrasalVerbs.set('Come Apart', 'Parçalara Ayırmak');
this.phrasalVerbs.set('Come Back', 'Aklına Gelmesi, Geri Gelmek, Geri Dönmek');
this.phrasalVerbs.set('Come Down', 'Fiyatı Azaltmak');
this.phrasalVerbs.set('Come Down With', 'Hastalığa Yakalanmak');
this.phrasalVerbs.set('Come In', 'Girmek');
this.phrasalVerbs.set('Come Over', 'Ziyaret Etmek');
this.phrasalVerbs.set('Come To', 'Şuuru Yerine Gelmek');
this.phrasalVerbs.set('Come Up With', 'Bağışta Bulunmak');
this.phrasalVerbs.set('Count On', 'Güvenmek');
this.phrasalVerbs.set('Cut Down On', 'Kesmek, Azaltmak');
this.phrasalVerbs.set('Cut Off', 'Durdurmak, Kesmek, Kapamak');
this.phrasalVerbs.set('Cut Out', 'Bırakmak, Kesip Çıkarmak');
this.phrasalVerbs.set('Depend On', 'Bağlanmak');
this.phrasalVerbs.set('Die Out', 'Yok Olmak, Soyu Tükenmek');
this.phrasalVerbs.set('Do Away With', 'Durdurmak, Bir Durumun Yürürlülükten Kalkması');
this.phrasalVerbs.set('Do Over', 'Bir Işi Tekrar Etmek');
this.phrasalVerbs.set('Do With', 'Bir Şey Ile İlgili Olmak, Alakalı Olmak');
this.phrasalVerbs.set('Do Without', 'Olmadan İdare Etmek');
this.phrasalVerbs.set('Draw Up', 'Düzenleme, Hazır Hale Getirme');
this.phrasalVerbs.set('Drop By', 'Haber Vermeden Uğramak');
this.phrasalVerbs.set('Drop Off', 'Araba İle Bırakmak');
this.phrasalVerbs.set('Drop Out', 'Vazgeçmek, Okuldan Kaydını Sildirmek');
this.phrasalVerbs.set('Drop Out Of', 'Sınıfta Kalmak');
this.phrasalVerbs.set('Eat Out', 'Yemek İçin Dışarıya Çıkmak');
this.phrasalVerbs.set('End Up', 'Sonuçlanmak');
this.phrasalVerbs.set('Fall Apart', 'Beklenmedik Bir Şekilde Kırılması Ve Parçalara Ayrılması');
this.phrasalVerbs.set('Fall On', 'Hücum Etmek');
this.phrasalVerbs.set('Fall Out', 'Kavga Etmek, Bozuşmak');
this.phrasalVerbs.set('Fall Through', 'Gerçekleşememek, Suya Düşmek');
this.phrasalVerbs.set('Fall To', 'Payına Düşmek');
this.phrasalVerbs.set('Figure Out', 'Anlamak, Bir Durumu Çözmek');
this.phrasalVerbs.set('Fill In', 'Birinin Yerini Geçici Olarak Almak');
this.phrasalVerbs.set('Fill Out', 'Bir Formu Doldurmak');
this.phrasalVerbs.set('Fill Up', 'Tamamen-Ağzına Kadar Doldurmak');
this.phrasalVerbs.set('Find Out', 'Öğrenmek');
this.phrasalVerbs.set('Follow Up', 'Takip Etmek');
this.phrasalVerbs.set('Force Out', 'Zorlamak');
this.phrasalVerbs.set('Get Along With', 'Biri İle İyi Geçinmek, İyi Anlaşmak');
this.phrasalVerbs.set('Get Around', 'Gezmek, Yayılmak');
this.phrasalVerbs.set('Get Away', 'Kaçmak, Kurtulmak');
this.phrasalVerbs.set('Get Away With', 'Bir İşten Sıyrılmak');
this.phrasalVerbs.set('Get By', 'Hayatını Sürdürmek');
this.phrasalVerbs.set('Get Off', 'İnmek, Ayrılmak');
this.phrasalVerbs.set('Get On', 'Binmek, Devam Etmek');
this.phrasalVerbs.set('Get Over', 'Bir Durumun Üstesinden Gelmek, Atlatmak, İyileşmek');
this.phrasalVerbs.set('Get Rid Of', 'Kurtulmak');
this.phrasalVerbs.set('Get Through With', 'Bitirmek');
this.phrasalVerbs.set('Get Up', 'Kalkmak');
this.phrasalVerbs.set('Give Away', 'Birisine Bir Şeyi Bedava Vermek');
this.phrasalVerbs.set('Give Back', 'Bir Şeyi Geri Vermek');
this.phrasalVerbs.set('Give Off', 'Salmak, Bırakmak, Yaymak');
this.phrasalVerbs.set('Give Rise To', 'Sebep Olmak');
this.phrasalVerbs.set('Go Ahead', 'İlerlemek, Devam Etmek');
this.phrasalVerbs.set('Go Back', 'Geri Dönmek');
this.phrasalVerbs.set('Go On', 'Devam Etmek, Olmak, Meydana Gelmek');
this.phrasalVerbs.set('Go Over', 'Yeniden İncelemek, Gözden Geçirmek');
this.phrasalVerbs.set('Go Through', 'Tüketmek');
this.phrasalVerbs.set('Grow Up', 'Büyümek');
this.phrasalVerbs.set('Hand In', 'Bir Şeyi Onaylamak (Ödev Yapmak)');
this.phrasalVerbs.set('Hang Up', 'Telefonu Kapatmak');
this.phrasalVerbs.set('Hold On', 'Beklemek');
this.phrasalVerbs.set('Hold Out', 'Bir Şeyi İdda Etmek');
this.phrasalVerbs.set('Hold Up', 'Geciktirmek');
this.phrasalVerbs.set('Keep Away', 'Uzak Durmak');
this.phrasalVerbs.set('Keep In With', 'Biri Ile İyi Geçinmek');
this.phrasalVerbs.set('Keep On (With Gerund)', 'Devam Etmek (Fiile -ing Takısı Ile)');
this.phrasalVerbs.set('Keep Up With', 'Geri Kalmamak');
this.phrasalVerbs.set('Lead To', 'Yol Açmak, Öncülük Etmek');
this.phrasalVerbs.set('Leave Out', 'Bir Şeyi Duruma Dahil Etmemek, Dışarıda Bırakmak');
this.phrasalVerbs.set('Look After', 'İlgilenmek, Bakmak');
this.phrasalVerbs.set('Look Down On', 'Hor Görmek, Küçümsemek');
this.phrasalVerbs.set('Look For', 'Aramak');
this.phrasalVerbs.set('Look Forward To', 'Dört Gözle Beklemek');
this.phrasalVerbs.set('Look In On', 'Birini Ziyaret Etmek');
this.phrasalVerbs.set('Look Into', 'Araştırmak, İncelemek');
this.phrasalVerbs.set('Look Out For', 'Dikkat Etmek, Gözetmek');
this.phrasalVerbs.set('Look Over', 'Göz Gerdirmek, Bir Şeyi İncelemek');
this.phrasalVerbs.set('Look Up', 'Bir Listenin İçinde Aramak');
this.phrasalVerbs.set('Look Up To', 'Saygı Göstermek');
this.phrasalVerbs.set('Make Do With', 'Bir Şey İle Yetinmek');
this.phrasalVerbs.set('Make For', 'E Neden Olmak, Sağlamak');
this.phrasalVerbs.set('Make Out', 'Duymak, Algılamak');
this.phrasalVerbs.set('Make Sure Of', 'Doğrulamak, Emin Olmak');
this.phrasalVerbs.set('Make Up', 'Bir Hikaye Veya Yalan Uydurmak');
this.phrasalVerbs.set('Pass Away', 'Vefat Etmek');
this.phrasalVerbs.set('Pass By', 'Geçip Gitmek');
this.phrasalVerbs.set('Pass Out', 'Bayılmak');
this.phrasalVerbs.set('Pick Out', 'Seçmek');
this.phrasalVerbs.set('Pick Up', 'Bir Şeyi Kaldırmak');
this.phrasalVerbs.set('Play Down', 'Bir Şeyi Önemsememek, Hafife Alma');
this.phrasalVerbs.set('Point Out', 'Açıklama Yapmak, Belirtmek');
this.phrasalVerbs.set('Put Away', 'Saklamak');
this.phrasalVerbs.set('Put Down', 'Yere Bırakmak');
this.phrasalVerbs.set('Put Forward', 'Bir Şeyi İddia Etmek, İleri Sürmek');
this.phrasalVerbs.set('Put Off', 'Ertelemek');
this.phrasalVerbs.set('Put On', 'Giyinmek');
this.phrasalVerbs.set('Put Out', 'Söndürmek');
this.phrasalVerbs.set('Put Over', 'Demir Atmak');
this.phrasalVerbs.set('Put Up', 'İnşa Etmek');
this.phrasalVerbs.set('Put Up With', 'Hoşgörü Göstermek');
this.phrasalVerbs.set('Read Over', 'Dikkatli Okumak');
this.phrasalVerbs.set('Rely On', 'Bir Duruma Veya Kişiye Bel Bağlamak, Güvenmek');
this.phrasalVerbs.set('Result In', 'Bir Şeye Neden Olmak');
this.phrasalVerbs.set('Run Across', 'Rastlamak');
this.phrasalVerbs.set('Run Into', 'Karşılaşmak, Rast Gelmek');
this.phrasalVerbs.set('Run Out Of', 'Tükenmek');
this.phrasalVerbs.set('Run Over', 'Tüketmek, Taşmak');
this.phrasalVerbs.set('Run Through', 'Var Olmak, Göz Atmak, Tüketmek');
this.phrasalVerbs.set('Send For', 'Getirtmek, Çağırmak');
this.phrasalVerbs.set('Set Forth', 'İleri Sürmek');
this.phrasalVerbs.set('Set Forward', 'İddia Etmek');
this.phrasalVerbs.set('Set Out', 'Yola Çıkmak');
this.phrasalVerbs.set('Set Up', 'Düzenlemek, Kurmak');
this.phrasalVerbs.set('Show Off', 'Gösteriş Yapmak');
this.phrasalVerbs.set('Show Up', 'Varmak, Ortaya Çıkmak');
this.phrasalVerbs.set('Slow Down', 'Sakinlemek, Yavaşlamak');
this.phrasalVerbs.set('Sort Out', 'Çözmek, Anlamak');
this.phrasalVerbs.set('Stick On', 'Yapışmak, Yapıştırmak');
this.phrasalVerbs.set('Switch Off', 'Bir Şeye Olan İlginin Yitirilmesi, Söndürmek');
this.phrasalVerbs.set('Take After', 'Benzemek');
this.phrasalVerbs.set('Take Back', 'Sözünü Geri Almak');
this.phrasalVerbs.set('Take Care Of', 'İlgilenmek, Sorumlu Olmak');
this.phrasalVerbs.set('Take Down', 'Bir Şeyi Not Almak');
this.phrasalVerbs.set('Take Off', 'Kıyafet Çıkarmak');
this.phrasalVerbs.set('Take To', 'Bir Şeye Başlamak, Hoşlanmak');
this.phrasalVerbs.set('Talk Back To', 'Kaba Bir Şekilde Cevap Vermek');
this.phrasalVerbs.set('Talk Over', 'Tartışmak');
this.phrasalVerbs.set('Tear Up', 'Parça Parça Etmek');
this.phrasalVerbs.set('Think Back On', 'Yad Etmek, Anmak');
this.phrasalVerbs.set('Think Out', 'Enine Boyuna Düşünmek');
this.phrasalVerbs.set('Think Over', 'Bir Durum Üzerine İyice Düşünmek');
this.phrasalVerbs.set('Throw Away', 'Atmak');
this.phrasalVerbs.set('Try On', 'Kıyafet Denemek');
this.phrasalVerbs.set('Try Out', 'Deneme Yapmak, Denemek');
this.phrasalVerbs.set('Turn Back', 'Geri Çevirmek, Reddetmek');
this.phrasalVerbs.set('Turn Down', 'Bir Şeyin Sesini Kısmak');
this.phrasalVerbs.set('Turn Into', 'Çevirmek');
this.phrasalVerbs.set('Turn Off', 'Elektriği Kapamak');
this.phrasalVerbs.set('Turn On', 'Elektriği Açmak');
this.phrasalVerbs.set('Turn Over', 'İşi Devretmek');
this.phrasalVerbs.set('Turn Up', 'Bir Şeyin Sesini Yükseltmek');
this.phrasalVerbs.set('Use Up', 'Harcamak, Tüketmek');
this.phrasalVerbs.set('Wait On', 'Servis Yapmak');
this.phrasalVerbs.set('Wake Up', 'Uyanmak');
this.phrasalVerbs.set('Walk Out On', 'Terk Etmek, Başından Atmak');
this.phrasalVerbs.set('Warm Up', 'Isınmak, Bir Şeyi Isıtmak');
this.phrasalVerbs.set('Work Out', 'Hesaplamak, Antrenman Yapmak');
  }
}

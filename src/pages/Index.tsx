import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

function Index() {
  const [playing, setPlaying] = useState<number | null>(null);

  const compositions = [
    {
      id: 1,
      title: 'Космическая одиссея',
      description: 'Эпическая композиция о путешествии в глубины космоса',
      duration: '3:45',
      genre: 'Ambient',
      price: '2500₽'
    },
    {
      id: 2,
      title: 'Городские огни',
      description: 'Энергичный трек о жизни мегаполиса',
      duration: '2:58',
      genre: 'Electronic',
      price: '2000₽'
    },
    {
      id: 3,
      title: 'Тихая гавань',
      description: 'Умиротворяющая мелодия о спокойствии',
      duration: '4:12',
      genre: 'Chillout',
      price: '1800₽'
    }
  ];

  const portfolioWorks = [
    {
      title: 'Проект "Звёздный путь"',
      client: 'Indie разработчик игр',
      image: 'https://cdn.poehali.dev/projects/d533cc45-fdce-4f33-9a8e-935affdad302/files/a3f6ece2-aa3b-47a3-a8d9-687bc8031382.jpg',
      tracks: 5
    },
    {
      title: 'Альбом "Цифровые мечты"',
      client: 'Музыкальный лейбл',
      image: 'https://cdn.poehali.dev/projects/d533cc45-fdce-4f33-9a8e-935affdad302/files/513eb959-4363-4791-aa8c-e28feaa5004f.jpg',
      tracks: 12
    },
    {
      title: 'Саундтрек к подкасту',
      client: 'Автор подкаста',
      image: 'https://cdn.poehali.dev/projects/d533cc45-fdce-4f33-9a8e-935affdad302/files/d6bc4c6c-a54d-4bb2-b63e-254954741797.jpg',
      tracks: 8
    }
  ];

  const pricingPlans = [
    {
      name: 'Стандарт',
      price: '2000₽',
      features: ['1 композиция', 'До 3 минут', 'Выбор жанра', 'MP3 формат', '3 правки']
    },
    {
      name: 'Премиум',
      price: '4500₽',
      features: ['1 композиция', 'До 5 минут', 'Любой жанр', 'WAV + MP3', '5 правок', 'Эксклюзивные права'],
      popular: true
    },
    {
      name: 'Альбом',
      price: '15000₽',
      features: ['5 композиций', 'До 4 минут каждая', 'Любой жанр', 'WAV + MP3', 'Без ограничений правок', 'Полные права', 'Обложка альбома']
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Отправьте стихи',
      description: 'Загрузите свой текст или напишите его в форме заказа',
      icon: 'FileText'
    },
    {
      number: 2,
      title: 'Выбор стиля',
      description: 'Укажите желаемый жанр, настроение и темп композиции',
      icon: 'Music'
    },
    {
      number: 3,
      title: 'Нейросеть создаёт',
      description: 'ИИ анализирует текст и генерирует уникальную музыку',
      icon: 'Sparkles'
    },
    {
      number: 4,
      title: 'Получите результат',
      description: 'Скачайте готовую композицию в высоком качестве',
      icon: 'Download'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Music" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold">NeuroMusic</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
              <a href="#process" className="hover:text-primary transition-colors">Процесс</a>
              <a href="#pricing" className="hover:text-primary transition-colors">Цены</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button>Заказать</Button>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-gradient-music"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-primary rounded-full animate-wave"
                  style={{
                    height: `${40 + Math.random() * 60}px`,
                    animationDelay: `${i * 0.1}s`
                  }}
                ></div>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
              Превращаем стихи в музыку
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Нейросеть создаёт уникальные композиции на основе ваших текстов
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Icon name="Play" className="mr-2" size={20} />
                Послушать примеры
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="MessageSquare" className="mr-2" size={20} />
                Обсудить проект
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Каталог композиций</h2>
            <p className="text-xl text-muted-foreground">Готовые работы доступные для покупки</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {compositions.map((comp) => (
              <Card key={comp.id} className="group hover:border-primary transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{comp.title}</CardTitle>
                      <Badge variant="secondary">{comp.genre}</Badge>
                    </div>
                    <Button
                      size="icon"
                      variant={playing === comp.id ? "default" : "ghost"}
                      onClick={() => setPlaying(playing === comp.id ? null : comp.id)}
                      className="group-hover:bg-primary group-hover:text-primary-foreground"
                    >
                      <Icon name={playing === comp.id ? "Pause" : "Play"} size={20} />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{comp.description}</CardDescription>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={16} />
                      {comp.duration}
                    </div>
                    <div className="text-xl font-bold text-primary">{comp.price}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Портфолио работ</h2>
            <p className="text-xl text-muted-foreground">Проекты, которыми мы гордимся</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {portfolioWorks.map((work, idx) => (
              <Card key={idx} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Music" size={16} />
                        <span className="text-sm">{work.tracks} композиций</span>
                      </div>
                    </div>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{work.title}</CardTitle>
                  <CardDescription>{work.client}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Как создаются композиции</h2>
            <p className="text-xl text-muted-foreground">Простой процесс от идеи до готового трека</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {steps.map((step) => (
              <Card key={step.number} className="text-center hover:border-primary transition-colors">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <Icon name={step.icon as any} size={28} className="text-white" />
                  </div>
                  <div className="text-4xl font-bold text-primary mb-2">{step.number}</div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{step.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Цены и услуги</h2>
            <p className="text-xl text-muted-foreground">Выберите подходящий тариф</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, idx) => (
              <Card 
                key={idx} 
                className={`relative ${plan.popular ? 'border-primary border-2 shadow-xl scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">Популярный</Badge>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant={plan.popular ? "default" : "outline"}>
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">Обсудим ваш проект и создадим что-то уникальное</p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Ваше имя</label>
                      <Input placeholder="Иван Иванов" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email</label>
                      <Input type="email" placeholder="ivan@example.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Тема</label>
                    <Input placeholder="Заказ композиции" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ваши стихи или описание проекта</label>
                    <Textarea 
                      placeholder="Расскажите о своём проекте, приложите стихи или опишите желаемое настроение музыки..." 
                      rows={6}
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Mail" className="text-primary" size={24} />
                </div>
                <div className="font-medium">Email</div>
                <div className="text-sm text-muted-foreground">info@neuromusic.ru</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Phone" className="text-primary" size={24} />
                </div>
                <div className="font-medium">Телефон</div>
                <div className="text-sm text-muted-foreground">+7 (999) 123-45-67</div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="MessageCircle" className="text-primary" size={24} />
                </div>
                <div className="font-medium">Telegram</div>
                <div className="text-sm text-muted-foreground">@neuromusic</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Icon name="Music" className="text-white" size={20} />
              </div>
              <span className="font-bold">NeuroMusic</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 NeuroMusic. Все права защищены.
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Index;

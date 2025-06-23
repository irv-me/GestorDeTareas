PS C:\Users\ian10\Desktop\Uni\Arqui\GestorDeTareas> mvn clean
[INFO] Scanning for projects...
[INFO] 
[INFO] --------------------< com.eventpro:event-platform >---------------------
[INFO] Building EventPro Platform 1.0.0
[INFO]   from pom.xml
[INFO] --------------------------------[ jar ]---------------------------------
[INFO] 
[INFO] --- clean:3.3.2:clean (default-clean) @ event-platform ---
[INFO] Deleting C:\Users\ian10\Desktop\Uni\Arqui\GestorDeTareas\target
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  0.494 s
[INFO] Finished at: 2025-06-22T19:36:04-06:00
[INFO] ------------------------------------------------------------------------
PS C:\Users\ian10\Desktop\Uni\Arqui\GestorDeTareas> mvn compile
[INFO] Scanning for projects...
[INFO] 
[INFO] --------------------< com.eventpro:event-platform >---------------------
[INFO] Building EventPro Platform 1.0.0
[INFO]   from pom.xml
[INFO] --------------------------------[ jar ]---------------------------------
[INFO] 
[INFO] --- resources:3.3.1:resources (default-resources) @ event-platform ---
[INFO] Copying 1 resource from src\main\resources to target\classes
[INFO] Copying 1 resource from src\main\resources to target\classes
[INFO]
[INFO] --- compiler:3.11.0:compile (default-compile) @ event-platform ---
[INFO] Changes detected - recompiling the module! :source
[INFO] Compiling 23 source files with javac [debug release 17] to target\classes
[INFO] -------------------------------------------------------------
[ERROR] COMPILATION ERROR :
[INFO] -------------------------------------------------------------
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/model/enums.java:[7,8] enum EventType is public, should be declared in a file named EventType.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/model/enums.java:[26,8] enum EventStatus is public, should be declared in a file named EventStatus.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/model/enums.java:[44,8] enum UserRole is public, should be declared in a file named UserRole.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/model/enums.java:[60,8] enum RegistrationStatus is public, should be declared in a file named RegistrationStatus.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/model/enums.java:[77,8] enum CertificateType is public, should be declared in a file named CertificateType.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/model/enums.java:[93,8] enum NotificationType is public, should be declared in a file named NotificationType.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[25,8] class EventData is public, should be declared in a file named EventData.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[204,8] class EventManager is public, should be declared in a file named EventManager.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[28,8] class ParticipantData is public, should be declared in a file named ParticipantData.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[48,8] class CertificateResult is public, should be declared in a file named CertificateResult.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[231,8] class CertificateGenerator is public, should be declared in a file named CertificateGenerator.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[272,8] class CertificateStrategyFactory is public, should be declared in a file named CertificateStrategyFactory.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[298,8] class CertificateService is public, should be declared in a file named CertificateService.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[35,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[35,52] cannot find symbol
  symbol:   method getTitle()
  location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[38,18] cannot find symbol
  symbol:   method getStatus()
  location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[39,18] cannot find symbol
  symbol:   method setStatus(com.eventpro.model.EventStatus)
  location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[41,18] cannot find symbol
  symbol:   method getCurrentAttendees()
  location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[42,18] cannot find symbol
  symbol:   method setCurrentAttendees(int)
  location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[50,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[50,72] cannot find symbol
  symbol:   method getId()
  location: variable savedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[58,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[64,44] cannot find symbol
  symbol:   method getTitle()
  location: variable updatedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[65,50] cannot find symbol
  symbol:   method getDescription()
  location: variable updatedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[66,48] cannot find symbol
  symbol:   method getStartDate()
  location: variable updatedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[67,46] cannot find symbol
  symbol:   method getEndDate()
  location: variable updatedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[68,47] cannot find symbol
  symbol:   method getLocation()
  location: variable updatedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[69,51] cannot find symbol
  symbol:   method getMaxAttendees()
  location: variable updatedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[70,44] cannot find symbol
  symbol:   method getPrice()
  location: variable updatedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[77,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[77,64] cannot find symbol
  symbol:   method getTitle()
  location: variable savedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[86,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[95,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[104,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[113,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[122,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[131,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[139,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[144,14] cannot find symbol
  symbol:   method setStatus(com.eventpro.model.EventStatus)
  location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[147,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[147,70] cannot find symbol
  symbol:   method getTitle()
  location: variable publishedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[155,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[160,14] cannot find symbol
  symbol:   method setStatus(com.eventpro.model.EventStatus)
  location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[164,57] cannot find symbol
  symbol:   method getTitle()
  location: variable cancelledEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[166,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[166,70] cannot find symbol
  symbol:   method getTitle()
  location: variable cancelledEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[174,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[179,14] cannot find symbol
  symbol:   method setStatus(com.eventpro.model.EventStatus)
  location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[183,59] cannot find symbol
  symbol:   method getTitle()
  location: variable completedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[185,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[185,70] cannot find symbol
  symbol:   method getTitle()
  location: variable completedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[193,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[200,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[208,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[210,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[215,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[219,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[228,25] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[237,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[237,48] cannot find symbol
  symbol:   method getTitle()
  location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[239,59] cannot find symbol
  symbol:   method getTitle()
  location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[247,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[249,66] cannot find symbol
  symbol:   method getTitle()
  location: variable updatedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[257,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[267,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[290,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[291,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[294,34] cannot find symbol
  symbol:   method builder()
  location: class com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[302,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[305,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[306,43] cannot find symbol
  symbol:   method getTitle()
  location: variable sampleEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[308,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/model/User.java:[122,31] cannot find symbol
  symbol:   method getStatus()
  location: variable r of type com.eventpro.model.Registration
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/model/Certificate.java:[73,45] cannot find symbol
  symbol:   method getTitle()
  location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/controller/PatternsController.java:[36,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.controller.PatternsController
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/controller/PatternsController.java:[54,13] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.controller.PatternsController
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/controller/PatternsController.java:[68,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.controller.PatternsController
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/controller/PatternsController.java:[82,13] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.controller.PatternsController
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/controller/PatternsController.java:[96,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.controller.PatternsController
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/controller/PatternsController.java:[111,13] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.controller.PatternsController
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/controller/PatternsController.java:[125,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.controller.PatternsController
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/controller/PatternsController.java:[138,13] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.controller.PatternsController
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/controller/PatternsController.java:[152,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.controller.PatternsController
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/factory/NotificationFactory.java:[26,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.factory.NotificationFactory
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/factory/NotificationFactory.java:[30,17] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.factory.NotificationFactory
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/factory/NotificationFactory.java:[34,17] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.factory.NotificationFactory
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/factory/NotificationFactory.java:[38,17] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.factory.NotificationFactory
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/factory/NotificationFactory.java:[42,17] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.factory.NotificationFactory
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/factory/NotificationFactory.java:[71,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.factory.NotificationFactory
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/factory/NotificationFactory.java:[76,17] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.factory.NotificationFactory
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/factory/NotificationFactory.java:[77,17] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.factory.NotificationFactory
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/factory/NotificationFactory.java:[79,17] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.factory.NotificationFactory
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[312,77] cannot find symbol
  symbol:   method getType()
  location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[315,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.strategy.CertificateService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[316,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.strategy.CertificateService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[316,44] cannot find symbol
  symbol:   method getTitle()
  location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[316,62] cannot find symbol
  symbol:   method getType()
  location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[317,9] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.strategy.CertificateService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[322,29] cannot find symbol
  symbol:   variable log
  location: class com.eventpro.patterns.strategy.CertificateService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[322,84] cannot find symbol
  symbol:   method getName()
  location: variable participant of type com.eventpro.patterns.strategy.ParticipantData
[INFO] 100 errors
[INFO] -------------------------------------------------------------
[INFO] ------------------------------------------------------------------------
[INFO] BUILD FAILURE
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  2.810 s
[INFO] Finished at: 2025-06-22T19:36:17-06:00
[INFO] ------------------------------------------------------------------------
[ERROR] Failed to execute goal org.apache.maven.plugins:maven-compiler-plugin:3.11.0:compile (default-compile) on project event-platform: Compilation failure: Compilation failure:
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/model/enums.java:[7,8] enum EventType is public, should be declared in a file named EventType.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/model/enums.java:[26,8] enum EventStatus is public, should be declared in a file named EventStatus.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/model/enums.java:[44,8] enum UserRole is public, should be declared in a file named UserRole.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/model/enums.java:[60,8] enum RegistrationStatus is public, should be declared in a file named RegistrationStatus.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/model/enums.java:[77,8] enum CertificateType is public, should be declared in a file named CertificateType.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/model/enums.java:[93,8] enum NotificationType is public, should be declared in a file named NotificationType.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[25,8] class EventData is public, should be declared in a file named EventData.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[204,8] class EventManager is public, should be declared in a file named EventManager.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[28,8] class ParticipantData is public, should be declared in a file named ParticipantData.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[48,8] class CertificateResult is public, should be declared in a file named CertificateResult.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[231,8] class CertificateGenerator is public, should be declared in a file named CertificateGenerator.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[272,8] class CertificateStrategyFactory is public, should be declared in a file named CertificateStrategyFactory.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[298,8] class CertificateService is public, should be declared in a file named CertificateService.java
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[35,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[35,52] cannot find symbol
[ERROR]   symbol:   method getTitle()
[ERROR]   location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[38,18] cannot find symbol
[ERROR]   symbol:   method getStatus()
[ERROR]   location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[39,18] cannot find symbol
[ERROR]   symbol:   method setStatus(com.eventpro.model.EventStatus)
[ERROR]   location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[41,18] cannot find symbol
[ERROR]   symbol:   method getCurrentAttendees()
[ERROR]   location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[42,18] cannot find symbol
[ERROR]   symbol:   method setCurrentAttendees(int)
[ERROR]   location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[50,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[50,72] cannot find symbol
[ERROR]   symbol:   method getId()
[ERROR]   location: variable savedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[58,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[64,44] cannot find symbol
[ERROR]   symbol:   method getTitle()
[ERROR]   location: variable updatedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[65,50] cannot find symbol
[ERROR]   symbol:   method getDescription()
[ERROR]   location: variable updatedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[66,48] cannot find symbol
[ERROR]   symbol:   method getStartDate()
[ERROR]   location: variable updatedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[67,46] cannot find symbol
[ERROR]   symbol:   method getEndDate()
[ERROR]   location: variable updatedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[68,47] cannot find symbol
[ERROR]   symbol:   method getLocation()
[ERROR]   location: variable updatedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[69,51] cannot find symbol
[ERROR]   symbol:   method getMaxAttendees()
[ERROR]   location: variable updatedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[70,44] cannot find symbol
[ERROR]   symbol:   method getPrice()
[ERROR]   location: variable updatedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[77,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[77,64] cannot find symbol
[ERROR]   symbol:   method getTitle()
[ERROR]   location: variable savedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[86,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[95,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[104,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[113,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[122,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[131,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[139,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[144,14] cannot find symbol
[ERROR]   symbol:   method setStatus(com.eventpro.model.EventStatus)
[ERROR]   location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[147,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[147,70] cannot find symbol
[ERROR]   symbol:   method getTitle()
[ERROR]   location: variable publishedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[155,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[160,14] cannot find symbol
[ERROR]   symbol:   method setStatus(com.eventpro.model.EventStatus)
[ERROR]   location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[164,57] cannot find symbol
[ERROR]   symbol:   method getTitle()
[ERROR]   location: variable cancelledEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[166,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[166,70] cannot find symbol
[ERROR]   symbol:   method getTitle()
[ERROR]   location: variable cancelledEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[174,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[179,14] cannot find symbol
[ERROR]   symbol:   method setStatus(com.eventpro.model.EventStatus)
[ERROR]   location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[183,59] cannot find symbol
[ERROR]   symbol:   method getTitle()
[ERROR]   location: variable completedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[185,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[185,70] cannot find symbol
[ERROR]   symbol:   method getTitle()
[ERROR]   location: variable completedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[193,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[200,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/service/EventService.java:[208,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.service.EventService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[210,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[215,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[219,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[228,25] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[237,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[237,48] cannot find symbol
[ERROR]   symbol:   method getTitle()
[ERROR]   location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[239,59] cannot find symbol
[ERROR]   symbol:   method getTitle()
[ERROR]   location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[247,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[249,66] cannot find symbol
[ERROR]   symbol:   method getTitle()
[ERROR]   location: variable updatedEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[257,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[267,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[290,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[291,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[294,34] cannot find symbol
[ERROR]   symbol:   method builder()
[ERROR]   location: class com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[302,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[305,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[306,43] cannot find symbol
[ERROR]   symbol:   method getTitle()
[ERROR]   location: variable sampleEvent of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/observer/EventObserver.java:[308,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.observer.EventManager
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/model/User.java:[122,31] cannot find symbol
[ERROR]   symbol:   method getStatus()
[ERROR]   location: variable r of type com.eventpro.model.Registration
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/model/Certificate.java:[73,45] cannot find symbol
[ERROR]   symbol:   method getTitle()
[ERROR]   location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/controller/PatternsController.java:[36,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.controller.PatternsController
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/controller/PatternsController.java:[54,13] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.controller.PatternsController
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/controller/PatternsController.java:[68,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.controller.PatternsController
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/controller/PatternsController.java:[82,13] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.controller.PatternsController
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/controller/PatternsController.java:[96,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.controller.PatternsController
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/controller/PatternsController.java:[111,13] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.controller.PatternsController
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/controller/PatternsController.java:[125,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.controller.PatternsController
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/controller/PatternsController.java:[138,13] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.controller.PatternsController
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/controller/PatternsController.java:[152,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.controller.PatternsController
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/factory/NotificationFactory.java:[26,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.factory.NotificationFactory
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/factory/NotificationFactory.java:[30,17] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.factory.NotificationFactory
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/factory/NotificationFactory.java:[34,17] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.factory.NotificationFactory
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/factory/NotificationFactory.java:[38,17] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.factory.NotificationFactory
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/factory/NotificationFactory.java:[42,17] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.factory.NotificationFactory
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/factory/NotificationFactory.java:[71,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.factory.NotificationFactory
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/factory/NotificationFactory.java:[76,17] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.factory.NotificationFactory
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/factory/NotificationFactory.java:[77,17] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.factory.NotificationFactory
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/factory/NotificationFactory.java:[79,17] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.factory.NotificationFactory
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[312,77] cannot find symbol
[ERROR]   symbol:   method getType()
[ERROR]   location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[315,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.strategy.CertificateService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[316,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.strategy.CertificateService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[316,44] cannot find symbol
[ERROR]   symbol:   method getTitle()
[ERROR]   location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[316,62] cannot find symbol
[ERROR]   symbol:   method getType()
[ERROR]   location: variable event of type com.eventpro.model.Event
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[317,9] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.strategy.CertificateService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[322,29] cannot find symbol
[ERROR]   symbol:   variable log
[ERROR]   location: class com.eventpro.patterns.strategy.CertificateService
[ERROR] /C:/Users/ian10/Desktop/Uni/Arqui/GestorDeTareas/src/main/java/com/eventpro/patterns/strategy/CertificateStrategy.java:[322,84] cannot find symbol
[ERROR]   symbol:   method getName()
[ERROR]   location: variable participant of type com.eventpro.patterns.strategy.ParticipantData
[ERROR] -> [Help 1]
[ERROR]
[ERROR] To see the full stack trace of the errors, re-run Maven with the -e switch.
[ERROR] Re-run Maven using the -X switch to enable full debug logging.
[ERROR]
[ERROR] For more information about the errors and possible solutions, please read the following articles:
[ERROR] [Help 1] http://cwiki.apache.org/confluence/display/MAVEN/MojoFailureException
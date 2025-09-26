"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Clock, Gift, Star, MessageCircle, Download, QrCode, ExternalLink } from "lucide-react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
}

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.5, ease: "easeOut" },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const bounceIn = {
  initial: { opacity: 0, scale: 0.3 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20,
    },
  },
}

const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/your-group-link-here"

const downloadPDF = () => {
  const link = document.createElement("a")
  link.href = "/du-sol-admission-checklist.pdf"
  link.download = "DU-SOL-Admission-Checklist.pdf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const redirectToWhatsApp = () => {
  window.open(WHATSAPP_GROUP_LINK, "_blank")
}

export default function WebinarLandingPage() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full float-animation" />
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full float-animation stagger-2" />
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full float-animation stagger-3" />
        </div>

        <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-32">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={bounceIn} className="mb-6">
              <Badge className="bg-white/20 text-white border-white/30 text-base sm:text-lg px-4 py-2 hover-scale">
                🎓 FREE Live Webinar
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight"
            >
              <span className="gradient-text">Confused About DU SOL Admission 2025?</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 text-pretty max-w-3xl mx-auto"
            >
              Join Our FREE Live Webinar & Solve All Your Doubts in 45 Minutes!
            </motion.p>

            <motion.p
              variants={fadeInUp}
              className="text-base sm:text-lg mb-10 text-white/80 max-w-2xl mx-auto text-pretty"
            >
              As you attend this session, you'll feel the relief of knowing exactly what to do — from documents to
              deadlines — plus a roadmap for your first semester.
            </motion.p>

            <motion.div variants={scaleIn}>
              <Button
                onClick={redirectToWhatsApp}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 h-auto font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 bounce-gentle w-full sm:w-auto"
              >
                👉 Register FREE Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why This Webinar Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-foreground">Why This Webinar?</h2>
              <p className="text-lg sm:text-xl text-muted-foreground italic max-w-3xl mx-auto text-pretty">
                "Every day DU SOL students message us about admission forms, documents, and mistakes. That's why we
                created this free webinar — so you don't waste time or risk errors."
              </p>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="p-6 sm:p-8 shadow-xl border-2 hover-scale">
                <CardContent className="p-0">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-center text-foreground">
                    You'll discover:
                  </h3>
                  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    {[
                      "The step-by-step admission process",
                      "Documents you must have ready (checklist included)",
                      "The biggest mistakes students make — and how to avoid them",
                      "Your first semester roadmap (from admission to December exams)",
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-3 hover-scale"
                        variants={fadeInLeft}
                        custom={index}
                      >
                        <CheckCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                        <span className="text-base sm:text-lg text-foreground">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Free Bonus Section */}
      <section className="py-16 sm:py-20 gradient-section text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }} className="inline-block">
                <Gift className="mx-auto mb-4 text-white" size={64} />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">🎁 Free Gift for Attendees</h2>
              <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto text-pretty">
                Get our DU SOL Admission Checklist PDF absolutely FREE when you register.
              </p>
            </motion.div>

            <motion.div
              variants={scaleIn}
              className="relative"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card
                className="inline-block p-6 sm:p-8 bg-white/10 backdrop-blur-sm border-white/20 cursor-pointer hover-scale"
                onClick={downloadPDF}
              >
                <CardContent className="p-0 text-center">
                  <motion.div whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400 }}>
                    <Download className="mx-auto mb-4 text-white" size={48} />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2">DU SOL Admission Checklist</h3>
                  <p className="text-white/80 mb-4">Complete PDF Guide</p>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-white/20 text-white border-white/30 hover:bg-white/30"
                  >
                    <Download size={16} className="mr-2" />
                    Download Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Who Should Attend Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block"
              >
                <Users className="mx-auto mb-4 text-primary" size={64} />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-foreground">Who Should Attend</h2>
              <p className="text-lg sm:text-xl text-muted-foreground">Perfect if you are:</p>
            </motion.div>

            <motion.div variants={staggerContainer} className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {[
                "Taking admission in DU SOL First Semester (2025 batch)",
                "Unsure about forms, documents, or deadlines",
                "Want a simple step-by-step roadmap for your first semester",
                "Planning to score well in exams without stress",
              ].map((item, index) => (
                <motion.div key={index} variants={fadeInUp} custom={index}>
                  <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover-scale group">
                    <CardContent className="p-0 flex items-center gap-4">
                      <motion.div
                        className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold group-hover:scale-110 transition-transform"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.3 }}
                      >
                        {index + 1}
                      </motion.div>
                      <span className="text-base sm:text-lg text-foreground">{item}</span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About the Host Section */}
      <section className="py-16 sm:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-foreground">About the Host</h2>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Card className="p-6 sm:p-8 shadow-xl relative overflow-hidden hover-scale">
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 300 }}
                >
                  <div className="bg-primary text-primary-foreground px-3 sm:px-4 py-2 rounded-full text-sm font-medium bounce-gentle">
                    Hi, I'm Vijay! 👋
                  </div>
                </motion.div>
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
                    <motion.div
                      className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-4xl sm:text-6xl text-white font-bold hover-scale"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      VG
                    </motion.div>
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-foreground">👩‍🏫 Vijay Gupta</h3>
                      <p className="text-lg sm:text-xl text-primary font-semibold mb-4">Founder of CEP Classes</p>
                      <div className="space-y-2 text-muted-foreground">
                        {[
                          { icon: Star, text: "15+ years of teaching experience" },
                          { icon: Users, text: "Trained 1000+ school & college students" },
                          { icon: CheckCircle, text: "Specialist in Accounts, Economics, Business Studies, Law" },
                        ].map((item, index) => (
                          <motion.p
                            key={index}
                            className="flex items-center justify-center md:justify-start gap-2 hover-scale"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <item.icon className="text-primary" size={20} />
                            <span className="text-sm sm:text-base">{item.text}</span>
                          </motion.p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 sm:py-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-8">
              <motion.div className="inline-block shake-animation" whileHover={{ scale: 1.2 }}>
                <Clock className="mx-auto mb-4 text-white" size={64} />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6">⚠️ Limited Seats Available</h2>
              <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto text-pretty mb-8">
                To keep the webinar interactive, we're allowing only a limited number of students.
              </p>
            </motion.div>

            <motion.div variants={bounceIn}>
              <Button
                onClick={redirectToWhatsApp}
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 h-auto font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                👉 Register FREE Today
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp QR Code Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-8 sm:mb-12">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block"
              >
                <MessageCircle className="mx-auto mb-4 text-primary" size={64} />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-foreground">
                📱 Scan the QR Code & Join Our WhatsApp Group!
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8">Here you'll get:</p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <motion.div variants={fadeInLeft} className="space-y-4 sm:space-y-6">
                {[
                  "DU SOL Admission Checklist PDF (Free Download)",
                  "Updates about Admission Forms & Deadlines",
                  "Direct access to ask your doubts",
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-left hover-scale"
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle className="text-primary flex-shrink-0" size={24} />
                    <span className="text-base sm:text-lg text-foreground">{item}</span>
                  </motion.div>
                ))}

                <div className="pt-6">
                  <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                    Prefer mobile? Just scan the QR code and join instantly.
                  </p>
                  <Button
                    onClick={redirectToWhatsApp}
                    className="w-full sm:w-auto hover:scale-105 transition-transform"
                  >
                    <ExternalLink size={16} className="mr-2" />👉 Join WhatsApp Group Now
                  </Button>
                </div>
              </motion.div>

              <motion.div
                variants={fadeInRight}
                className="flex justify-center"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div
                  className="pulse-glow rounded-2xl p-6 sm:p-8 bg-card border-2 cursor-pointer hover-scale"
                  onClick={redirectToWhatsApp}
                >
                  <div className="w-40 h-40 sm:w-48 sm:h-48 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center">
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.5 }}>
                      <QrCode size={100} className="text-white sm:w-[120px] sm:h-[120px]" />
                    </motion.div>
                  </div>
                  <p className="text-center mt-4 text-muted-foreground text-sm sm:text-base">
                    Scan to Join WhatsApp Group
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-foreground">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <motion.div variants={staggerContainer} className="space-y-4 sm:space-y-6">
              {[
                {
                  q: "How much does the webinar cost?",
                  a: "It's 100% free.",
                },
                {
                  q: "Will I get recording?",
                  a: "Yes, only for registered students.",
                },
                {
                  q: "What if I have more doubts after the webinar?",
                  a: "You'll get access to our DU SOL WhatsApp Group for continuous updates.",
                },
                {
                  q: "Do I need to install anything?",
                  a: "No, you can join from your phone or laptop via Zoom/Google Meet.",
                },
              ].map((faq, index) => (
                <motion.div key={index} variants={fadeInUp} custom={index}>
                  <Card className="p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover-scale group">
                    <CardContent className="p-0">
                      <motion.h3
                        className="text-lg sm:text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        Q: {faq.q}
                      </motion.h3>
                      <p className="text-base sm:text-lg text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 gradient-section text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 text-balance">
                🎓 Don't let confusion delay your admission.
              </h2>
              <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-2xl mx-auto text-pretty">
                👉 Tap the button below and register FREE for the webinar now.
              </p>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={redirectToWhatsApp}
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-lg sm:text-xl px-6 sm:px-8 py-3 sm:py-4 h-auto font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 bounce-gentle w-full sm:w-auto"
                >
                  Register Now & Get Free PDF 🎁
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

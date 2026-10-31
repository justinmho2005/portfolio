# Course context and case-study evidence

Updated October 10, 2026. Official course descriptions were supplied directly by Justin in chat. Summaries on the website describe course scope, not a claim that every course topic was implemented in each project.

## Confirmed course context
- EECE 2160 — Embedded Design: Enabling Robotics (4 hours). Integrated lecture/lab covering digital design, object-oriented programming, Linux, and software control of physical devices through an embedded robotics platform.
- EECE 2150 — Circuits and Signals: Biomedical Applications (5 hours). Integrated lecture/lab covering circuit theory, signal processing, circuit building, MATLAB, operational amplifiers, active filters, linearity/time invariance, analog/digital conversion, and biomedical EKG systems. NUpath Analyzing/Using Data.
- EECE 2412 — Fundamentals of Electronics (4 hours). Semiconductor devices, diode circuits, transistor biasing and switching, PSpice models and transient analysis, CMOS logic, power, delay, fan-out, transfer characteristics, and small-signal analysis. Corequisite EECE 2413.
- EECE 2413 — Lab for EECE 2412 (1 hour). Experiments with diodes, BJT switching/amplifiers and MOSFET switching/amplification; electrical measurements and oscilloscope analysis of frequency, gain, distortion, and cutoff frequencies. NUpath Writing Intensive. Corequisite EECE 2412.

## Hexapod
Sources: archived Embedded Lab 4.docx (October 25, 2024) and Embedded Lab 5.docx (November 8, 2024).
Added switch-to-count mapping, stored PWM commands, button-release update logic, bounded candidate selection, shared control and independent joint enables, and report-backed technical considerations.
The 3,000-count step is 60 microseconds at 50 MHz; Lab 5's 30-microsecond statement conflicts with the clock. No mechanical debounce, full-robot walking, or integrated C++ controller is inferred.

## ECG
Sources: EECE 2150 Lab 8, 10, 13, 14, and 15 reports.
Added battery rails and reference/decoupling setup, differential/common-mode tests, electrode offset motivation, gain/headroom decisions, and supporting DAQ/filter exercises. Lab 8 sampling settings do not establish ECG sampling settings. Lab 15 introduction and conclusion conflict regarding MATLAB processing; completed acquired-ECG MATLAB processing is not claimed.
Original asset public/projects/ecg/synthetic-filtering.png is the second embedded image on Lab 13 page 4. It is a synthetic square-wave result, not an ECG trace.
Lab 14's stated gain-setting resistor is not repeated because its value requires verification. Lab 9's time-constant discrepancy is not promoted as a validated result.

## Analog electronics
Sources: final EECE 2413 Lab 1–5 reports, Spring 2026.
Added a documented investigation process, results table, LED-indicator design bands, night-light timing and behavior, CMOS OR construction, gain/stability and model/measurement comparisons.
Original asset public/projects/analog/night-light-schematic.png is the first embedded image on Lab 3 page 6.
Inconsistent transistor-current calculations, Zener breakdown values, and threshold estimates are omitted from the evidence table. These reports are evidence of described work, not independent remeasurement by the website author.

Original source documents remain unchanged and unpublished. Public case studies include selected original figures and paraphrased engineering details.

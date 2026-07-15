;;; maak.scm --- Quixotic build automation, ported from Make to maak
;;; -*- mode: scheme; -*-
;;; SPDX-License-Identifier: GPL-3.0-or-later
;;; Copyright © 2026 Urutau-Ltd <softwarelibre@urutau-ltd.org>
;;;
;;;   , _ ,      _    _            _                     _ _      _
;;;  ( o o )    | |  | |          | |                   | | |    | |
;;; /'` ' `'\   | |  | |_ __ _   _| |_ __ _ _   _ ______| | |_ __| |
;;; |'''''''|   | |  | | '__| | | | __/ _` | | | |______| | __/ _` |
;;; |\\'''//|   | |__| | |  | |_| | || (_| | |_| |      | | || (_| |
;;;    """       \____/|_|   \__,_|\__\__,_|\__,_|      |_|\__\__,_|
;;;
;;; This program is free software: you can redistribute it and/or modify
;;; it under the terms of the  GNU General Public License as published by
;;; the Free Software Foundation, either version 3 of the License, or (at
;;; your option) any later version.
;;;
;;; This program is distributed in the hope that it will be useful, but
;;; WITHOUT ANY WARRANTY; without even the implied warranty of
;;; MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
;;; See the GNU General Public License for more details.
;;;
;;; Commentary:
;;;
;;; You should have received a copy of the GNU General Public License
;;; along with this program. If not, see <https://www.gnu.org/licenses/>.
;;;
;;; This file replaces, in full, the following former build-system files:
;;;   Makefile (top-level), Makefile.container, Makefile.dev,
;;;   Makefile.fmt, Makefile.lint, help.pl
;;;
;;;
;;; This is a rewrite of the previously implemented Perl + Makefile ported to
;;; maak (codeberg.org/jjba23/maak).
;;;
;;;
;;; NOTE - EVERYTHING MUST BE SELF-CONTAINED IN THIS FILE. DO NOT ADD ANY
;;; IMPORTS OUTSIDE ICE-9 AND MAAK. THIS FILE SHOULD NOT BE SPLIT INTO
;;; MODULES BECAUSE IT WOULD BE A MESS TO CHANGE THE GUILE LOAD PATH
;;; AGAIN!
(define-module (maak)
    #:declarative? #t
    #:use-module (maak maak))

(define (default)
    "List available tasks."
    (list-tasks))
;;; maak.scm ends here.
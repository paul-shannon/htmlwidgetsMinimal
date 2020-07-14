#' @import htmlwidgets
#' @export
hwm <- function(text="hello hwm",  width = NULL, height = NULL) {

  settings <- list()
  x <- list(
    data = text,
    settings = settings
    )
  htmlwidgets::createWidget("hwm", x, width = width, height = height)
}

#' @export
hwmOutput <- function(outputId, width = "100%", height = "400px") {
  shinyWidgetOutput(outputId, "hwm", width, height, package = "hwm")
}

#' @export
renderHwm <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  shinyRenderWidget(expr, hwmOutput, env, quoted = TRUE)
}
